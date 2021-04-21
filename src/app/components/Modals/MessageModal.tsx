import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
    message: string;
}

export function MessageModal({ closeModal, modalIsOpen, message }: PropsShape) {
    return (
        <Modal
            className="modalContent message"
            overlayClassName="modalOverlay message"
            isOpen={modalIsOpen}
            onAfterOpen={() => setTimeout(() => closeModal(), 500)}
            contentLabel="Message"
        >
            <b style={{ color: 'white' }}>{message}</b>
        </Modal>
    );
}
