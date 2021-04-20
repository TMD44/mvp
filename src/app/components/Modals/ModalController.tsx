import React, { useState } from 'react';
import { MessageModal } from './MessageModal';
import { DefaultModal } from './DefaultModal';
import { SettingsModal } from './SettingsModal';
import { SourceImportModal } from './SourceImportModal';
import { MediaModal } from './MediaModal';
import { ModalType } from './ModalType';

interface PropsShape {
    modalType: ModalType;
    closeModal: () => void;
    modalIsOpen: boolean;
    message: string;
}

export function ModalController({
    modalType,
    closeModal,
    modalIsOpen,
    message,
}: PropsShape) {
    const [videoPlayerIsOpen, setVideoPlayerIsOpen] = useState(false);

    const openVideoPlayer = () => setVideoPlayerIsOpen(true);
    const closeVideoPlayer = () => setVideoPlayerIsOpen(false);

    const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitOverflowScrolling: 'touch',
            overflow: 'auto',
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

    switch (modalType) {
        case ModalType.Media:
            return (
                <MediaModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    videoPlayerIsOpen={videoPlayerIsOpen}
                    openVideoPlayer={openVideoPlayer}
                    closeVideoPlayer={closeVideoPlayer}
                />
            );

        case ModalType.SourceImport:
            return (
                <SourceImportModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );

        case ModalType.Settings:
            return (
                <SettingsModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );

        case ModalType.Message:
            return (
                <MessageModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    message={message}
                />
            );

        /* case ModalType.VideoPlayer:
            return (
                <VideoPlayerModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );
        */

        default:
            return (
                <DefaultModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );
    }
}
