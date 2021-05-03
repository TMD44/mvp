import React, { useState } from 'react';
import { Backdrop, Dialog } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { mediaSelector } from '@redux/selectors/mediaSelector';
import { VideoPlayerModal } from './VideoPlayerModal';
import { ModalTitleBar } from './ModalTitleBar';
import { TransitionRight } from './ModalTransitions';
import { MediaDetails } from '../MediaDetails/MediaDetails';
import { MediaDetailsPlay } from '../MediaDetails/MediaDetailsPlay';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
    ids: string[];
}

export function MediaModal({ handleModalClose, modalIsOpen, ids }: PropsShape) {
    const [videoPlayerIsOpen, setVideoPlayerIsOpen] = useState(false);

    const handleVideoPlayerOpen = () => setVideoPlayerIsOpen(true);
    const handleVideoPlayerClose = () => setVideoPlayerIsOpen(false);

    const allMedia = useSelector(mediaSelector);
    const videoArray: any[] = [];
    if (ids) {
        ids.forEach((id) => {
            videoArray.push(allMedia[id]);
        });
    }

    return (
        <>
            <Dialog
                aria-labelledby="Media"
                aria-describedby="Description of the selected media"
                // fullScreen
                fullWidth
                maxWidth="lg" // 'lg','md','sm','xl','xs'
                open={modalIsOpen}
                onClose={handleModalClose}
                TransitionComponent={TransitionRight}
                TransitionProps={{ timeout: 300 }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    className: 'modalBackdrop',
                }}
            >
                <ModalTitleBar
                    title="Media"
                    handleModalClose={handleModalClose}
                />
                <div className="modalPaper">
                    <MediaDetails id={ids ? ids[0] : ''} />
                    <MediaDetailsPlay
                        videoArray={videoArray}
                        handleVideoPlayerOpen={handleVideoPlayerOpen}
                    />
                </div>
            </Dialog>
            <VideoPlayerModal
                handleVideoPlayerClose={handleVideoPlayerClose}
                videoPlayerIsOpen={videoPlayerIsOpen}
                id={ids ? ids[0] : ''}
            />
        </>
    );
}
