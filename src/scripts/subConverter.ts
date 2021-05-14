import fs from 'fs';

const subsrt = require('subsrt');

export const subConverter = (subFilePath: string) => {
    try {
        const sub = fs.readFileSync(subFilePath, 'utf-8');

        const vtt = subsrt.convert(sub, { format: 'vtt', fps: 25 });

        const filePathWithoutExt = subFilePath.replace(/\.[^/.]+$/, '.vtt');

        fs.writeFileSync(filePathWithoutExt, vtt);

        return filePathWithoutExt;
    } catch (error) {
        // console.error('Error from subConverter.ts: ', error);
        return subFilePath;
    }
};
