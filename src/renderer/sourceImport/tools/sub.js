const { getScanResults } = require("./../../../main/configuration");

function subFinder(media) {
    let resultArray = [];
    
    getScanResults().sub.forEach(sub => {
        if (sub.path.concat(sub.fn) == media.path.concat(media.fn)) {
            resultArray.push(sub.full);
        }
    });

    return resultArray;
}

module.exports.subFinder = subFinder;