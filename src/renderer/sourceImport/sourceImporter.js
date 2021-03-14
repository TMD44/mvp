const { ipcRenderer } = require("electron");
const { mediaJSONGenerator, completeJSONGenerator, printJSONToFile } = require("./json");

let completeJSON = {};
let mediaInJSON = [];

let filesArray = {};

let fileTypes = {
    media: ['.mkv', '.mp4'],
    sub: ['.srt', '.ass', '.vtt', '.ssa', '.sub', '.stl', '.scc'],
    nfo: ['.nfo']
}

function mediaTypeUpdate(type) {
    let b = document.getElementById("mediaType_" + type);
    let t = "." + type;
    if (fileTypes.media.includes(t)) {
        fileTypes.media = fileTypes.media.filter((e) => e !== t);
        b.classList.toggle("btn-dark");
        b.classList.toggle("btn-danger");
    } else if (!fileTypes.media.includes(t)) {
        fileTypes.media.push(t);
        b.classList.toggle("btn-dark");
        b.classList.toggle("btn-danger");
    }
}

document.getElementById("dirOpenButton").addEventListener("click", (e) => {
    if (filesArray.length != 0) filesArray.length = 0;

    ipcRenderer.send('openDir_async', fileTypes);
});

ipcRenderer.on('openDir_async_reply', (event, arg) => {
    console.log("reply: ", arg);
    filesArray = arg;
})

document.getElementById("importSourcesButton").addEventListener("click", (e) => {
    if (filesArray.media == undefined) console.log("Válassz ki egy mappát");

    filesArray.media.forEach((file) => {
        let f = mediaJSONGenerator(file,filesArray);
        mediaInJSON.push(f);
    });
    
    completeJSON = completeJSONGenerator(mediaInJSON);
    printJSONToFile("./exports/movieData.json", completeJSON);
    
    document.getElementById("importDone").innerHTML = "Import is done!";
});

document.getElementById('importWithMetadata').addEventListener('click', e => {
    console.log('JSON: ', completeJSON);

    /*let response;
    completeJSON.media.forEach(movie => {
        if (movie.imdb != undefined) {
            if (movie.imdb.id != undefined) {
                tmdb_findByImdbID(movie.imdb.id).then(result => {
                    console.log('IMDB Response: ', result);
                });
            }
        }
    });
*/
});


//DINAMIKUSAN FRISSÜLŐ ÉRTÉKEK
/*
setInterval(() => {
    //document.getElementById("selected_files_length").innerHTML =filesArray.length;
    //document.getElementById("selected_files").value = filesArray;
}, 100);*/
