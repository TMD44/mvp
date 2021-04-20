import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
    message: string;
}

export function MessageModal({ closeModal, modalIsOpen, message }: PropsShape) {
    const customStyles: Modal.Styles = {
        content: {
            position: 'absolute',
            top: '90%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '20px',
            width: '300px',
            padding: '1px',
            border: 'none',
            backgroundColor: 'rgba(105,105,105,0.7)',
            boxShadow: '0 0 5px 10px rgba(105,105,105,0.7)',
            textAlign: 'center',
            borderRadius: '30px',
        },
        overlay: {
            background: 'transparent',
        },
    };

    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onAfterOpen={() => setTimeout(() => closeModal(), 1000)}
            contentLabel="SETTINGS MODAL"
        >
            <b style={{ color: 'white' }}>{message}</b>
        </Modal>
    );
}
/*
style="position: absolute; inset: 90% 40px 40px 50%; border: 1px solid rgb(204, 204, 204); background: grey; overflow: auto; border-radius: 4px; outline: none; padding: 20px; transform: translate(-50%, -50%); height: 10px; width: 300px;"
*/
