import React from 'react';
import { MessageModal } from './MessageModal';
import { DefaultModal } from './DefaultModal';
import { SettingsModal } from './SettingsModal';
import { VideoPlayerModal } from './VideoPlayerModal';

interface PropsShape {
    modalType: string;
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
    const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(5px)',
            overflow: 'auto',
        },
    };

    switch (modalType) {
        case 'SettingsModal':
            return (
                <SettingsModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );

        case 'VideoPlayerModal':
            return (
                <VideoPlayerModal
                    customStyles={customStyles}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            );

        case 'MessageModal':
            return (
                <MessageModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    message={message}
                />
            );

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
