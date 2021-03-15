function subFinder(media, array) {
    let resultArray = [];
    
    array.sub.forEach(sub => {
        if (sub.path.concat(sub.fn) == media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}

module.exports.subFinder = subFinder;