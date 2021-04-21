/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

// import fs from 'fs';
import { promises as fsp } from 'fs';
import { join, extname } from 'path';

// ASYNCHRONOUS
// Base code from Stackoverflow, minor changes have been made:
// https://stackoverflow.com/questions/56583365/async-and-recursive-directory-scan-for-file-listing-in-nodejs-and-expressjs
export async function scanDir(
    directoryName: string,
    filter: string[],
    results: string[] = []
) {
    const files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (const f of files) {
        const fullPath: string = join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, results);
        } else if (filter.includes(extname(fullPath))) {
            results.push(fullPath);
        }
    }
    return results;
}
/*
async function scanDir(directoryName, filter, callback) {
    const files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        const fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (filter.includes(path.extname(fullPath))) {
            callback(fullPath);
        }
    }
}
*/
/*
async function scanDir(directoryName, regex, callback) {
    const files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        const fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (regex.test(fullPath)) {
            callback(fullPath);
        }
    }
}
*/

// SYNCHRONOUS
/*
// Base code from Stackoverflow, minor changes have been made:
// https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs
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
