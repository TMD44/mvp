import React from 'react';
import ReactPlayer from 'react-player';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

// https://www.npmjs.com/package/react-player

interface PropsShape {
    handleVideoPlayerClose: () => void;
}

export function VideoPlayer({ handleVideoPlayerClose }: PropsShape) {
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
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="100%"
            />
        </>
    );
}
