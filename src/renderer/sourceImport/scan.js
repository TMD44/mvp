const { mediaJSONGenerator, completeJSONGenerator, printJSONToFile } = require('./json');
const { config } = require('./../../main/configuration');
const { scanDir } = require('./tools/scanDir');
const { fileSorting, excludedFromScan } = require('./fileSorting');

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

        for (const i in paths) {
            const files = await scanDir(paths[i], [media, sub, nfo].flat());
            for (const j in files) {
                if (!excludedFromScan(files[j])) {
                    await fileSorting(files[j], media, sub, nfo, scanResults);
                }
            }
        }

        await config.setScanResults(scanResults);
        const results = await config.getScanResults();
        
        for (const file in results.media) {
            const result = await mediaJSONGenerator(results.media[file], results);
            scan.mediaInJSON[result.id] = result;
        }

        scan.completeJSON = await completeJSONGenerator(scan.mediaInJSON);
        await printJSONToFile('./exports/movieData.json', scan.completeJSON);

        //purgeScanResults();
        document.getElementById('importDone').innerHTML = 'Import is done!';
    },

    onlineScan: () => {
        return tmdb.multiSearch(mediaInJSON.unsure_metadata.filename_data.title).then(result => {
            mediaInJSON.unsure_metadata['tmdb_data'] = result.data.results[0];
            console.log('mediaInJSON: ', mediaInJSON);
            return mediaInJSON;
        });
    },
};

module.exports.scan = scan;
