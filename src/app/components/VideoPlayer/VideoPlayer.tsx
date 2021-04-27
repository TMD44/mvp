import React from 'react';
import ReactPlayer from 'react-player';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

// https://www.npmjs.com/package/react-player

interface PropsShape {
    handleVideoPlayerClose: () => void;
    videoPath: string;
}

export function VideoPlayer({ handleVideoPlayerClose, videoPath }: PropsShape) {
    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleVideoPlayerClose}
                edge="start"
            >
                <ArrowBackIcon className="modalPaper video backButton" />
            </IconButton>
            <ReactPlayer
                playing
                controls
                url={videoPath}
                width="100%"
                height="100%"
            />
        </>
    );
}
