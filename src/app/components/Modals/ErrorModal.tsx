import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
}

export function ErrorModal({ closeModal, modalIsOpen }: PropsShape) {
    return (
        <Modal
            className="modalContent error"
            overlayClassName="modalOverlay error"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Error"
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
            <h1 style={{ color: 'black' }}>ERROR MODAL</h1>
        </Modal>
    );
}
