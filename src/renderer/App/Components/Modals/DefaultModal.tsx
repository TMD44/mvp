import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';

interface PropsShape {
    customStyles: Record<string, unknown>; // TODO: UTÁNAOLVASNI
    closeModal: () => void;
    modalIsOpen: boolean;
}

export function DefaultModal({
    customStyles,
    closeModal,
    modalIsOpen,
}: PropsShape) {
    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="DEFAULT MODAL"
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
            <h1 style={{ color: 'black' }}>DEFAULT MODAL</h1>
        </Modal>
    );
}
