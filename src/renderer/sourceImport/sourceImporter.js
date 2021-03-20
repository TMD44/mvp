const { mediaJSONGenerator, completeJSONGenerator, printJSONToFile } = require('./json');
const { getScanPaths, getFileTypes, purgeScanPaths, purgeScanResults, getScanResults, setScanResults } = require('./../../main/configuration');
const { tmdb_seachForMovies, tmdb_multiSearch, tmdb_seachForTV } = require('./movieDB/tmdb/tmdb');
const { scanDir } = require('./tools/scanDir');
const { fileSorting } = require('./fileSorting');
const { ipcRendererCommunication } = require('../ipcRendererCommunication');

let completeJSON = {};
let mediaInJSON = {};

document.getElementById('openDirButton').addEventListener('click', event => {
    purgeScanResults();
    ipcRendererCommunication();
});

document.getElementById('importSourcesButton').addEventListener('click', event => {
    //if (getScanPaths() > 0) console.log('Válassz ki egy mappát');
    let scanResults = {
        media: [],
        sub: [],
        nfo: [],
    };

    let { media, sub, nfo } = getFileTypes();

    getScanPaths().forEach(async dir => {
        await scanDir(dir, [media, sub, nfo].flat(), file => {
            fileSorting(file, scanResults);
        })
            .then(() => {
                setScanResults(scanResults);
            })
            .then(() => {
                getScanResults().media.forEach(file => {
                    let mediaItem = mediaJSONGenerator(file);
                    //let media2 = offline_data_selection(media1);
                    mediaInJSON[mediaItem.id] = mediaItem;
                });

                completeJSON = completeJSONGenerator(mediaInJSON);
                printJSONToFile('./exports/movieData.json', completeJSON);

                //purgeScanResults();
                document.getElementById('importDone').innerHTML = 'Import is done!';
            });
    });
});

document.getElementById('importWithMetadata').addEventListener('click', event => {
    console.log('JSON: ', completeJSON.media);
    Object.values(completeJSON.media).forEach(movie => {
        //console.log(movie);
        /*if (movie.movieDB_id != undefined) {
            if (movie.movieDB_id.imdb_id != undefined) {
                console.log("HOOO");
                tmdb_get_external_IDs(movie.movieDB_id.imdb_id);
                tmdb_find_by_external_source(movie.movieDB_id.imdb_id);
            }
        }*/
        tmdb_seachForMovies('Who can kill a child');
        //tmdb_seachForTV(movie.unsure_metadata.filename_data.title, 2019);
    });
});

document.getElementById('deleteDirs').addEventListener('click', event => {
    purgeScanPaths();
});

//DINAMIKUSAN FRISSÜLŐ ÉRTÉKEK

/*setInterval(() => {
    
    //document.getElementById("selected_files_length").innerHTML = filesArray.media.length;
    //document.getElementById("selected_files").value = filesArray.media;
}, 100);*/
