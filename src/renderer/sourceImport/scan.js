const { mediaJSONGenerator, completeJSONGenerator, printJSONToFile } = require('./json');
const { config } = require('./../../main/configuration');
const { scanDir } = require('./tools/scanDir');
const { fileSorting } = require('./fileSorting');

const scan = {
    completeJSON: {},
    mediaInJSON: {},

    offlineScan: async () => {
        let scanResults = {
            media: [],
            sub: [],
            nfo: [],
        };

        const { media, sub, nfo } = await config.getFileTypes();

        const paths = await config.getScanPaths();

        for (const dir in paths) {
            const files = await scanDir(paths[dir], [media, sub, nfo].flat());
            for (const file in files) {
                if (!/SAMPLE/gi.test(files[file])) {
                    await fileSorting(files[file], media, sub, nfo, scanResults);
                }
            }
        }

        await config.setScanResults(scanResults);
        const results = await config.getScanResults();
        for (const file in results.media) {
            const result = await mediaJSONGenerator(results.media[file]);
            scan.mediaInJSON[result.id] = result;
        }
        scan.completeJSON = await completeJSONGenerator(scan.mediaInJSON);
        await printJSONToFile('./exports/movieData.json', scan.completeJSON);

        //purgeScanResults();
        document.getElementById('importDone').innerHTML = 'Import is done!';
    },

    onlineScan: () => {
        Object.values(completeJSON.media).forEach(movie => {
            //console.log(movie);

            if (movie.movieDB_id.imdb_id != undefined) {
                return tmdb.getExternalIDs(movie.movieDB_id.imdb_id).then(result => {
                    return result;
                });
            }

            return tmdb.multiSearch(mediaInJSON.unsure_metadata.filename_data.title).then(result => {
                mediaInJSON.unsure_metadata['tmdb_data'] = result.data.results[0];
                console.log('mediaInJSON: ', mediaInJSON);
                return mediaInJSON;
            });
        });
    },
};

module.exports.scan = scan;
