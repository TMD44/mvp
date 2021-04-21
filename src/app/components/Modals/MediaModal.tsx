import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { VideoPlayerModal } from './VideoPlayerModal';

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
    videoPlayerIsOpen: boolean;
    openVideoPlayer: () => void;
    closeVideoPlayer: () => void;
}

export function MediaModal({
    closeModal,
    modalIsOpen,
    videoPlayerIsOpen,
    openVideoPlayer,
    closeVideoPlayer,
}: PropsShape) {
    return (
        <Modal
            className="modalContent media"
            overlayClassName="modalOverlay media"
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
