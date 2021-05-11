import { extname } from 'path';

interface ReplyType {
    media: string[];
    sub: string[];
    nfo: string[];
}

interface FilteredDataType {
    fn: string;
    ext: string;
    path: string;
    full: string;
}

const objTemplate = (file: string): FilteredDataType => {
    return {
        fn: file.substring(file.lastIndexOf('\\') + 1, file.lastIndexOf('.')),
        ext: extname(file),
        path: file.substring(0, file.lastIndexOf('\\')),
        full: file,
    };
};

export const fileSorting = (
    file: string,
    media: string[],
    sub: string[],
    nfo: string[],
    reply: ReplyType
) => {
    const item = objTemplate(file);

    if (media.includes(extname(file))) {
        reply.media.push(item);
    } else if (sub.includes(extname(file))) {
        reply.sub.push(item);
    } else if (nfo.includes(extname(file))) {
        reply.nfo.push(item);
    }
};

export const excludedFromScan = (file: string): boolean => {
    const regex = /SAMPLE/gi;
    return regex.test(file);
};
