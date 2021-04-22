/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { getAssetsPath } from 'src/lib/getPaths';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

interface PropsShape {
    closeVideoPlayer: () => void;
    videoPlayerIsOpen: boolean;
}

export function VideoPlayerModal({
    closeVideoPlayer,
    videoPlayerIsOpen,
}: PropsShape) {
    return (
        <Modal
            className="modalContent videoPlayer"
            overlayClassName="modalOverlay videoPlayer"
            isOpen={videoPlayerIsOpen}
            onRequestClose={closeVideoPlayer}
            contentLabel="Video player"
            shouldCloseOnOverlayClick={false}
        >
            <FaWindowClose
                onClick={closeVideoPlayer}
                style={{
                    width: '20px',
                    height: '20px',
                    color: 'white',
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    filter: 'blur(0.5px)',
                    cursor: 'pointer',
                }}
            />
            <h1 style={{ color: 'white', textAlign: 'center' }}>VIDEO MODAL</h1>
            <VideoPlayer />
            {/* <video width="1000" height="500" controls>
                <track
                    src={getAssetsPath('SAMPLE.srt')}
                    kind="subtitles"
                    srcLang="hu"
                    label="Hungarian"
                />
                <source
                    src={getAssetsPath('sample/SAMPLE.mp4')}
                    type="video/mp4"
                />
            </video> */}
        </Modal>
    );
}
