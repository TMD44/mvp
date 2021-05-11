import React from 'react';
import { ModalType } from '@type/ModalType';
import { SettingsModal } from './SettingsModal';
import { SourceImportModal } from './SourceImportModal';
import { AboutModal } from './AboutModal';
import { MessageModal } from './MessageModal';

interface PropsShape {
    modalType: ModalType;
    handleModalClose: () => void;
    modalIsOpen: boolean;
    message: string;
}

export const ModalController = ({
    modalType,
    handleModalClose,
    modalIsOpen,
    message,
}: PropsShape) => {
    switch (modalType) {
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
                    message={`ERROR ${message}`}
                />
            );
    }
};
