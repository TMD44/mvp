const { config } = require('./../../../main/configuration');

async function nfoFinder(media) {
    let resultArray = [];
    const results = await config.getScanResults();
    
    results.nfo.forEach(nfo => {
        if (nfo.path.concat(nfo.fn) == media.path.concat(media.fn)) {
            resultArray.push(nfo.full);
        }
    });

    return resultArray[0];
}

module.exports.nfoFinder = nfoFinder;
