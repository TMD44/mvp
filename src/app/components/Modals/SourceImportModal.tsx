import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { SourceImporter } from '../SourceImport/SourceImporter';

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
}

export function SourceImportModal({ closeModal, modalIsOpen }: PropsShape) {
    return (
        <Modal
            className="modalContent sourceImport"
            overlayClassName="modalOverlay sourceImport"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Source import"
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
            <SourceImporter />
        </Modal>
    );
}
