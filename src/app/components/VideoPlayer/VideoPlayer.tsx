import React from 'react';
import { getDataByID } from '@scripts/getDataByID';
import ReactPlayer from 'react-player';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

interface PropsShape {
    handleVideoPlayerClose: () => void;
    id: string;
}

export const VideoPlayer = ({ handleVideoPlayerClose, id }: PropsShape) => {
    const currentMedia = getDataByID(id);

    return (
        <>
            <div id="videoPlayerTitle" hidden>
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
                controls
                width="100%"
                height="100%"
                url={[{ src: currentMedia.full_path, type: 'video/mp4' }]}
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
};
