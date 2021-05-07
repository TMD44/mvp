import { subConverter } from '@scripts/subConverter';

export function subFinder(media, results) {
    const resultArray = [];

    results.sub.forEach((sub) => {
        if (sub.path.concat(sub.fn) === media.path.concat(media.fn)) {
            const vttSub = subConverter(sub.full);
            resultArray.push(vttSub);
        }
    });

    return resultArray;
}
