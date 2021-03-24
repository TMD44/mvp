const { config } = require("./../../../main/configuration");

async function subFinder(media) {
    let resultArray = [];

    const results = await config.getScanResults();
    
    results.sub.forEach(sub => {
        if (sub.path.concat(sub.fn) == media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}

module.exports.subFinder = subFinder;