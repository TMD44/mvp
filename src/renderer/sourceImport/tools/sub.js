async function subFinder(media, results) {
    let resultArray = [];

    results.sub.forEach(sub => {
        if (sub.path.concat(sub.fn) == media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}

module.exports.subFinder = subFinder;
