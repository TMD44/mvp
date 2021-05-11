import { createHash, HexBase64Latin1Encoding } from 'crypto';

export const getHashID = (
    fileName: string,
    hashAlgorithm = 'md5',
    encoding: HexBase64Latin1Encoding = 'hex'
) => {
    return createHash(hashAlgorithm).update(fileName).digest(encoding);
};
