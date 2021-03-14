const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

//ASYNCHRONOUS
async function scanDir(directoryName, filter, callback) {
    let files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        let fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (filter.includes(path.extname(fullPath))) {
            callback(fullPath);
        }
    }
}
/*
async function scanDir(directoryName, regex, callback) {
    let files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        let fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (regex.test(fullPath)) {
            callback(fullPath);
        }
    }
}
*/
/*
//https://stackoverflow.com/questions/56583365/async-and-recursive-directory-scan-for-file-listing-in-nodejs-and-expressjs
async function scanDir(directoryName, filter, results = []) {
    let files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        let fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, results);
        } else if (filter.includes(path.extname(fullPath))) {
            results.push(fullPath);
        }
    }
    return results;
}
*/

//SYNCHRONOUS
/*
//https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs
function scanDir(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("Error: no dir found! ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            scanDir(filename, filter, callback);
        } else if (filter.includes(path.extname(filename))) callback(filename);
    }
}
*/
/*
function scanDir(startPath, regex, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("Error: no dir found! ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            scanDir(filename, filter, callback);
        } else if (regex.test(filename)) callback(filename);
    }
}
*/

module.exports.scanDir = scanDir;
