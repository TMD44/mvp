function nfoFinder(media, { nfo }) {
    let resultArray = [];

    nfo.forEach(nfo => {
        if (nfo.path.concat(nfo.fn) == media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
    });

    return resultArray[0];
}

module.exports.nfoFinder = nfoFinder;
