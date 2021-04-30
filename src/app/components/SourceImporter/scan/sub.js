export function subFinder(media, results) {
    const resultArray = [];

    results.sub.forEach((sub) => {
        if (sub.path.concat(sub.fn) === media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}
