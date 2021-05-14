import { subConverter } from '@scripts/subConverter';
import { ScanResultsType, ScanResultType } from '@type/ConfigType';

export const subFinder = (media: ScanResultType, results: ScanResultsType) => {
    const resultArray: string[] = [];

    results.sub.forEach((sub: ScanResultType) => {
        if (sub.path.concat(sub.fn) === media.path.concat(media.fn)) {
            const vttSub = subConverter(sub.full);
            resultArray.push(vttSub);
        }
    });

    return resultArray;
};
