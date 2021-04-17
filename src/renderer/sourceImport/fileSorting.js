import { extname } from 'path';

export async function fileSorting(file, media, sub, nfo, reply) {
    if (media.includes(extname(file))) {
        reply.media.push(objTemplate(file));
    } else if (sub.includes(extname(file))) {
        reply.sub.push(objTemplate(file));
    } else if (nfo.includes(extname(file))) {
        reply.nfo.push(objTemplate(file));
    }
}

function objTemplate(file) {
    return {
        fn: file.substring(file.lastIndexOf('\\') + 1, file.lastIndexOf('.')),
        ext: extname(file),
        path: file.substring(0, file.lastIndexOf('\\')),
        full: file,
    };
}

export function excludedFromScan(file) {
    const regex = /SAMPLE/gi;
    return regex.test(file);
}
