import React, { useState } from 'react';
import { ModalController } from './Modals/ModalController';
import { Main } from './Main';
import { SideBar } from './SideBar';
import { ModalType } from './Modals/ModalType';

export function Layout() {
    const [position, setPosition] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleCollapsedChange = (checked: boolean) => {
        setCollapsed(checked);
    };

    const handlePositionChange = (checked: boolean) => {
        setPosition(checked);
    };

    const handleToggleSidebar = (value: boolean) => {
        setToggled(value);
    };

    function handleModal(type: ModalType, message?: string) {
        setModalType(type);
        if (message) setModalMessage(message);

        openModal();
    }

    return (
        <div
            className={`app ${position ? 'position' : ''} ${
                toggled ? 'toggled' : ''
            }`}
        >
            <SideBar
                // image={image}
                collapsed={collapsed}
                position={position}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleModal={handleModal}
            />
            <Main />
            <ModalController
                modalType={modalType}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                message={modalMessage}
                handlePositionChange={handlePositionChange}
                position={position}
            />
        </div>
    );
}
