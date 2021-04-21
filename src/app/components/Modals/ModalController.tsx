import React, { useState } from 'react';
import { MessageModal } from './MessageModal';
import { ErrorModal } from './ErrorModal';
import { SettingsModal } from './SettingsModal';
import { SourceImportModal } from './SourceImportModal';
import { MediaModal } from './MediaModal';
import { ModalType } from './ModalType';

interface PropsShape {
    modalType: ModalType;
    closeModal: () => void;
    modalIsOpen: boolean;
    message: string;
    handlePositionChange: (checked: boolean) => void;
    position: boolean;
}

export function ModalController({
    modalType,
    closeModal,
    modalIsOpen,
    message,
    handlePositionChange,
    position,
}: PropsShape) {
    const [videoPlayerIsOpen, setVideoPlayerIsOpen] = useState(false);

    const openVideoPlayer = () => setVideoPlayerIsOpen(true);
    const closeVideoPlayer = () => setVideoPlayerIsOpen(false);

    switch (modalType) {
        case ModalType.Media:
            return (
                <MediaModal
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
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );

        case ModalType.Settings:
            return (
                <SettingsModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    handlePositionChange={handlePositionChange}
                    position={position}
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
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );
        */

        default:
            return (
                <ErrorModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
            );
    }
}
