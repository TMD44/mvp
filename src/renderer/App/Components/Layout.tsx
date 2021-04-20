import React, { useState } from 'react';
import { Main } from './Main';
import { ModalController } from './Modals/ModalController';
import { SideBar } from './SideBar';

export function Layout() {
    const [position, setPosition] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [messageModalIsOpen, setMessageModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const openMessageModal = () => setMessageModalIsOpen(true);
    const closeMessageModal = () => setMessageModalIsOpen(false);

    const handleCollapsedChange = (checked: boolean) => {
        setCollapsed(checked);
    };

    const handlePositionChange = (checked: boolean) => {
        setPosition(checked);
    };
    /* const handleImageChange = (checked) => {
        setImage(checked);
    }; */

    const handleToggleSidebar = (value: boolean) => {
        setToggled(value);
    };

    function handleModal(type: string, message?: string) {
        setModalType(type);
        if (message) setModalMessage(message);

        if (modalType === 'MessageModal') {
            openMessageModal();
        } else {
            openModal();
        }
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
                handlePositionChange={handlePositionChange}
                handleModal={handleModal}
            />
            <Main />
            <ModalController
                modalType={modalType}
                closeModal={
                    modalType === 'MessageModal'
                        ? closeMessageModal
                        : closeModal
                }
                modalIsOpen={
                    modalType === 'MessageModal'
                        ? messageModalIsOpen
                        : modalIsOpen
                }
                message={modalMessage}
            />
        </div>
    );
}
