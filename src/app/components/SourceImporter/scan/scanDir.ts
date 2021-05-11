/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import fs, { promises as fsp } from 'fs';
import { join, extname } from 'path';

// Base code from Stackoverflow, minor changes have been made:
// https://stackoverflow.com/questions/56583365/async-and-recursive-directory-scan-for-file-listing-in-nodejs-and-expressjs
export const scanDir = async (
    directoryName: string,
    filter: string[],
    results: string[] = []
) => {
    try {
        // TODO: sometimes ASYNC readdir stops working
        //  const files = await fsp.readdir(directoryName, { withFileTypes: true });
        const files = fs.readdirSync(directoryName, { withFileTypes: true });
        for (const f of files) {
            const fullPath: string = join(directoryName, f.name);
            if (f.isDirectory()) {
                await scanDir(fullPath, filter, results);
            } else if (filter.includes(extname(fullPath))) {
                results.push(fullPath);
            }
        }
    } catch (error) {
        console.log('Error from scanDir.ts: ', error);
    }
    return results;
};
/*
const scanDir = async (directoryName, filter, callback) => {
    const files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        const fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (filter.includes(path.extname(fullPath))) {
            callback(fullPath);
        }
    }
};
*/
/*
const scanDir = async (directoryName, regex, callback) => {
    const files = await fsp.readdir(directoryName, { withFileTypes: true });
    for (let f of files) {
        const fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scanDir(fullPath, filter, callback);
        } else if (regex.test(fullPath)) {
            callback(fullPath);
        }
    }
};
*/
