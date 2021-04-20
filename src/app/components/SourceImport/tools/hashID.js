import { createHash } from 'crypto';

export function getHashID(fileName, hashAlgorithm = 'md5', encoding = 'hex') {
    return createHash(hashAlgorithm).update(fileName).digest(encoding);
}
