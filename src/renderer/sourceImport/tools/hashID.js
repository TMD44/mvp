const crypto = require("crypto");

function getHashID(fileName, hashAlgorithm = "md5", encoding = "hex") {
    return crypto.createHash(hashAlgorithm).update(fileName).digest(encoding);
}

module.exports.getHashID = getHashID;
