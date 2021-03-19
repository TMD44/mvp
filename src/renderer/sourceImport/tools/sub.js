function subFinder(media, { sub }) {
    let resultArray = [];
    
    sub.forEach(sub => {
        if (sub.path.concat(sub.fn) == media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}

module.exports.subFinder = subFinder;