import React, { useState } from 'react';
import { ModalController } from './Modals/ModalController';
import { SideBar } from './SideBar/SideBar';
import { ModalType } from './Modals/ModalType';
import { TopBar } from './TopBar/TopBar';
import { MainController } from './Main/MainController';
import { MainType } from './Main/MainType';

export function Layout() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mainType, setMainType] = useState('Home' as MainType);
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
        <div id="layout">
            <TopBar
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarOpen={handleSideBarOpen}
                setMainType={setMainType}
            />
            <SideBar
                handleModalOpen={handleModalOpen}
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarClose}
                setMainType={setMainType}
            />
            <MainController mainType={mainType} />
            <ModalController
                modalType={modalType}
                handleModalClose={handleModalClose}
                modalIsOpen={modalIsOpen}
                message={modalMessage}
            />
        </div>
    );
}
