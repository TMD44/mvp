import React from 'react';
import { Modal, Fade } from '@material-ui/core';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

interface PropsShape {
    handleVideoPlayerClose: () => void;
    videoPlayerIsOpen: boolean;
}

export function VideoPlayerModal({
    handleVideoPlayerClose,
    videoPlayerIsOpen,
}: PropsShape) {
    return (
        <Modal
            aria-labelledby="Video Player"
            aria-describedby="Play the selected media"
            open={videoPlayerIsOpen}
            onClose={handleVideoPlayerClose}
            // closeAfterTransition
        >
            <Fade in={videoPlayerIsOpen} timeout={{ enter: 3000, exit: 1000 }}>
                <div className="modalPaper video">
                    <VideoPlayer
                        handleVideoPlayerClose={handleVideoPlayerClose}
                    />
                </div>
            </Fade>
        </Modal>
    );
}
