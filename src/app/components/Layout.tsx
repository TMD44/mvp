import React, { useState } from 'react';
import { MainType } from '@type/MainType';
import { ModalType } from '@type/ModalType';
import { ModalController } from './Modals/ModalController';
import { SideBar } from './SideBar/SideBar';
import { TopBar } from './TopBar/TopBar';
import { MainController } from './Main/MainController';

export const Layout = () => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mainType, setMainType] = useState('Home' as MainType);
    const [mainMessage, setMainMessage] = useState('');
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

    const handleMainOpen = (type: MainType, message?: string) => {
        setMainType(type);
        if (message) setMainMessage(message);
    };

    return (
        <div id="layout">
            <TopBar
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarOpen={handleSideBarOpen}
                headTitle={mainType}
            />
            <SideBar
                handleModalOpen={handleModalOpen}
                sideBarIsOpen={sideBarIsOpen}
                handleSideBarClose={handleSideBarClose}
                handleMainOpen={handleMainOpen}
            />
            <MainController mainType={mainType} message={mainMessage} />
            <ModalController
                modalType={modalType}
                handleModalClose={handleModalClose}
                modalIsOpen={modalIsOpen}
                message={modalMessage}
            />
        </div>
    );
};
