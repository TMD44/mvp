import { promisify } from 'util';
import { exec } from 'child_process';
import { path as ffprobe } from 'ffprobe-static';

const execProm = promisify(exec);

function filterFfprobe(data: Record<string, Record<string, unknown>>) {
    const filteredVideoInfo: Record<string, unknown> = {};

    // FORMAT
    const { format } = data;
    if (data.format) {
        filteredVideoInfo.file_size = format.size;
        filteredVideoInfo.duration = format.duration;
        filteredVideoInfo.bit_rate = format.bit_rate;
    }

    // STREAMS
    /*
    const streams = data.streams;
    let video = [];
    let audio = [];
    let sub = [];
    if (streams) {
        streams.forEach(stream => {
            switch (stream.codec_type) {
                case 'video':
                    filteredVideoInfo['video'] = {

                    }
                    break;

                case 'audio':
                    break;

                case 'subtitle':
                    const subObj = {
                        language: stream.tags.language,
                        title: stream.tags.title,
                    };
                    filteredVideoInfo['video'] = sub.push()
                    break;

                default:
                    break;
            }
        })
    } */

    return filteredVideoInfo;
}

export async function getVideoInfo(video: string) {
    let result;
    try {
        // TODO: NOT WORKING YET
        result = await execProm(
            `${ffprobe} -v quiet -print_format json -show_format -show_streams -show_chapters -show_data ${video}`
        );
    } catch (err) {
        console.error('ERROR FROM videoInfo.js: ', err);
        return;
    }
    console.log('RESULT: ', JSON.parse(result.stdout));
    // eslint-disable-next-line consistent-return
    return filterFfprobe(JSON.parse(result.stdout));
}
