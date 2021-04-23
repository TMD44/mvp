import React, { useState } from 'react';
import { ModalController } from './Modals/ModalController';
import { Main } from './Main';
import { SideBar } from './SideBar/SideBar';
import { ModalType } from './Modals/ModalType';
import { TopBar } from './TopBar/TopBar';

export function Layout() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState('Default' as ModalType);
    const [modalMessage, setModalMessage] = useState('');

    const handleSideBarOpen = () => {
        setSideBarIsOpen(true);
    };

    const handleSideBarClose = () => {
        setSideBarIsOpen(false);
    };

    const handleModalOpen = (type: ModalType, message?: string) => {
        setModalType(type);
        if (message) setModalMessage(message);

        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <TopBar
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarOpen={handleSideBarOpen}
            />
            <SideBar
                handleModalOpen={handleModalOpen}
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarClose}
            />
            <Main />
            <ModalController
                modalType={modalType}
                handleModalClose={handleModalClose}
                modalIsOpen={modalIsOpen}
                message={modalMessage}
            />
        </>
    );
}
