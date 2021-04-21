import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import Switch from 'react-switch';

interface PropsShape {
    closeModal: () => void;
    modalIsOpen: boolean;
    handlePositionChange: (checked: boolean) => void;
    position: boolean;
}

export function SettingsModal({
    closeModal,
    modalIsOpen,
    handlePositionChange,
    position,
}: PropsShape) {
    return (
        <Modal
            className="modalContent settings"
            overlayClassName="modalOverlay settings"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Settings"
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
            <h1 style={{ color: 'black' }}>SETTINGS MODAL</h1>
            <Switch
                height={16}
                width={32}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handlePositionChange}
                checked={position}
                onColor="#219de9"
                offColor="#bbbbbb"
            />
        </Modal>
    );
}
