import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { VideoPlayerModal } from './VideoPlayerModal';

interface PropsShape {
    customStyles: Record<string, unknown>;
    closeModal: () => void;
    modalIsOpen: boolean;
    videoPlayerIsOpen: boolean;
    openVideoPlayer: () => void;
    closeVideoPlayer: () => void;
}

export function MediaModal({
    customStyles,
    closeModal,
    modalIsOpen,
    videoPlayerIsOpen,
    openVideoPlayer,
    closeVideoPlayer,
}: PropsShape) {
    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Media details"
        >
            <FaWindowClose
                onClick={closeModal}
                style={{
                    width: '20px',
                    height: '20px',
                    color: 'black',
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    filter: 'blur(0.5px)',
                    cursor: 'pointer',
                }}
            />
            <h1 style={{ color: 'black' }}>MEDIA MODAL</h1>
            <button type="button" onClick={openVideoPlayer}>
                OPEN VIDEO PLAYER MODAL
            </button>
            <VideoPlayerModal
                closeVideoPlayer={closeVideoPlayer}
                videoPlayerIsOpen={videoPlayerIsOpen}
            />
        </Modal>
    );
}
