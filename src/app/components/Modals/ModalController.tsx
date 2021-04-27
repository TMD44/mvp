import React from 'react';
import { SettingsModal } from './SettingsModal';
import { SourceImportModal } from './SourceImportModal';
import { MediaModal } from './MediaModal';
import { ModalType } from './ModalType';
import { AboutModal } from './AboutModal';
import { MessageModal } from './MessageModal';

interface PropsShape {
    modalType: ModalType;
    handleModalClose: () => void;
    modalIsOpen: boolean;
    message: string;
}

export function ModalController({
    modalType,
    handleModalClose,
    modalIsOpen,
    message,
}: PropsShape) {
    switch (modalType) {
        /* case 'Media':
            return (
                <MediaModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                />
            ); */

        case 'SourceImport':
            return (
                <SourceImportModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                />
            );

        case 'Settings':
            return (
                <SettingsModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                />
            );

        case 'Message':
            return (
                <MessageModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                    message={message}
                />
            );

        case 'About':
            return (
                <AboutModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                />
            );

        default:
            return (
                <MessageModal
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                    message={`ERROR: ${message}`}
                />
            );
    }
}
