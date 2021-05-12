import { subConverter } from '@scripts/subConverter';

export const subFinder = (
    media: { fn: any; path: any; full?: string; ext?: any },
    results: { sub: any[] }
) => {
    const resultArray: string[] = [];

    results.sub.forEach(
        (sub: { path: string | any[]; fn: any; full: string }) => {
            if (sub.path.concat(sub.fn) === media.path.concat(media.fn)) {
                const vttSub = subConverter(sub.full);
                resultArray.push(vttSub);
            }
        }
    );

    return resultArray;
};
