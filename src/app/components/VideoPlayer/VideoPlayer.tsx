import { getDataByID } from '@scripts/getDataByID';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

// https://www.npmjs.com/package/react-player

interface PropsShape {
    handleVideoPlayerClose: () => void;
    id: string;
}

// TODO: some movies have no sound

export function VideoPlayer({ handleVideoPlayerClose, id }: PropsShape) {
    const currentMedia = getDataByID(id);
    const [playing, setPlaying] = useState(true);

    return (
        <>
            <div id="videoPlayerTitle" hidden={playing}>
                <IconButton
                    id="videoPlayerBackButton"
                    aria-label="back"
                    onClick={handleVideoPlayerClose}
                >
                    <ArrowBackIcon />
                </IconButton>
                <h1>{currentMedia.metadata.title}</h1>
            </div>
            <ReactPlayer
                pip
                stopOnUnmount={false}
                autoPlay
                // playing={playing}
                controls
                width="100%"
                height="100%"
                url={[{ src: currentMedia.full_path, type: 'video/mp4' }]}
                // onPlay={() => setPlaying(true)}
                // onPause={() => setPlaying(false)}
                config={{
                    file: {
                        tracks: [
                            {
                                kind: 'subtitles',
                                src: currentMedia.subtitles[0],
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
