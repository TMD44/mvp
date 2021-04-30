import { getDataByID } from '@scripts/getDataByID';
import React from 'react';
import ReactPlayer from 'react-player';

// https://www.npmjs.com/package/react-player

interface PropsShape {
    handleVideoPlayerClose: () => void;
    id: string;
}

// TODO: some movies have no sound

export function VideoPlayer({ handleVideoPlayerClose, id }: PropsShape) {
    const currentMedia = getDataByID(id);

    return (
        <>
            <ReactPlayer
                pip
                autoPlay
                controls
                width="100%"
                height="100%"
                url={[{ src: currentMedia.full_path, type: 'video/mp4' }]}
                config={{
                    file: {
                        tracks: [
                            {
                                kind: 'subtitles',
                                src:
                                    'C:/Users/tmd-pc/Downloads/Saenai Heroine no Sodatekata (BD_1280x720)/Saenai Heroine no Sodatekata - 01 (BD 1280x720 x264 AAC).vtt',
                                srcLang: 'hu',
                                label: 'Hungarian',
                                default: true,
                            },
                        ],
                    },
                }}
            />
        </>
    );
}
