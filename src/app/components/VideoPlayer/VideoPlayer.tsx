import React from 'react';
import ReactPlayer from 'react-player';

// https://www.npmjs.com/package/react-player

interface PropsShape {
    handleVideoPlayerClose: () => void;
    videoPath: string;
}

// TODO: some movies have no sound

export function VideoPlayer({ handleVideoPlayerClose, videoPath }: PropsShape) {
    return (
        <>
            <ReactPlayer
                playing
                controls
                pip
                url={videoPath}
                width="100%"
                height="100%"
            />
        </>
    );
}
/*
<IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleVideoPlayerClose}
                edge="start"
            >
                <ArrowBackIcon className="modalPaper video backButton" />
            </IconButton>
*/
