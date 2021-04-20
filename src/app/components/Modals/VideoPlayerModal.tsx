/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { getAssetsPath } from '@main/getPaths';

interface PropsShape {
    closeVideoPlayer: () => void;
    videoPlayerIsOpen: boolean;
}

export function VideoPlayerModal({
    closeVideoPlayer,
    videoPlayerIsOpen,
}: PropsShape) {
    const customStyles: Record<string, unknown> = {
        content: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            WebkitOverflowScrolling: 'touch',
            overflow: 'auto',
            backgroundColor: 'black',
        },
        overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(5px)',
        },
    };

    return (
        <Modal
            style={customStyles}
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
            <video width="1000" height="500" controls>
                <track
                    src={getAssetsPath('SAMPLE.srt')}
                    kind="subtitles"
                    srcLang="hu"
                    label="Hungarian"
                />
                <source src={getAssetsPath('SAMPLE.mp4')} type="video/mp4" />
            </video>
        </Modal>
    );
}
