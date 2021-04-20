/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Switch from 'react-switch';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {
    FaInfoCircle,
    FaFolderOpen,
    FaFileImport,
    FaVideo,
    FaGithub,
    FaDiscord,
} from 'react-icons/fa';
import { MdSettings, MdDelete, MdHelp } from 'react-icons/md';
import Hamburger from 'hamburger-react';
import mvp from '../../../../assets/mvp.jpg';
import {
    openDirButton,
    deleteDirs,
    importSourcesButton,
} from '../../sourceImport/SourceImporter';

interface PropsShape {
    collapsed: boolean;
    position: boolean;
    toggled: boolean;
    handleToggleSidebar: (checked: boolean) => void;
    handleCollapsedChange: (checked: boolean) => void;
    handlePositionChange: (value: boolean) => void;
    handleModal: (type: string, message?: string) => void;
}

export function SideBar({
    collapsed,
    position,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange,
    handlePositionChange,
    handleModal,
}: PropsShape) {
    const [isOpen, setOpen] = useState(false);

    const handleHamburgerMenu = () => {
        setOpen(!isOpen);
        handleCollapsedChange(!collapsed);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        handleModal('MessageModal', 'Copied to clipboard!');
    };

    return (
        <ProSidebar
            rtl={position}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div className="block">
                    <div
                        style={{
                            paddingLeft: '15px',
                            paddingTop: '12px',
                        }}
                    >
                        <Hamburger
                            toggled={!isOpen}
                            toggle={handleHamburgerMenu}
                        />
                    </div>
                    <div
                        style={{
                            padding: 'px',
                            pointerEvents: 'none',
                        }}
                    >
                        <img
                            src={mvp}
                            alt=""
                            style={{
                                paddingLeft: '20px',
                                paddingTop: '10px',
                                width: '180px',
                                height: '50px',
                                display: collapsed ? 'none' : '',
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        paddingLeft: '25px',
                        paddingBottom: '20px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 12,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {collapsed ? 'MVP' : 'Multimedia Visualization Platform'}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        onClick={openDirButton}
                        icon={<FaFolderOpen />}
                        suffix={<span className="badge green">OPEN</span>}
                    >
                        OPEN DIR
                    </MenuItem>
                    <MenuItem
                        onClick={deleteDirs}
                        icon={<MdDelete />}
                        suffix={<span className="badge red">DELETE</span>}
                    >
                        DELETE DIR
                    </MenuItem>
                    <MenuItem
                        onClick={importSourcesButton}
                        icon={<FaFileImport />}
                        suffix={<span className="badge blue">IMPORT</span>}
                    >
                        IMPORT SOURCES
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem
                        onClick={() => handleModal('VideoPlayerModal')}
                        icon={<FaVideo />}
                    >
                        OPEN VIDEO MODAL
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleModal('SettingsModal')}
                        icon={<MdSettings />}
                    >
                        OPEN SETTINGS MODAL
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu title="Settings" icon={<MdSettings />}>
                        <MenuItem
                            suffix={
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
                            }
                        >
                            Sidebar position
                        </MenuItem>
                        <MenuItem>submenu 2 </MenuItem>
                        <SubMenu title="$submenu 3">
                            <MenuItem>submenu 3.1 </MenuItem>
                            <MenuItem>submenu 3.2 </MenuItem>
                            <SubMenu title="submenu 3.3">
                                <MenuItem>submenu 3.3.1 </MenuItem>
                                <MenuItem>submenu 3.3.2 </MenuItem>
                                <MenuItem>submenu 3.3.3 </MenuItem>
                                <SubMenu title="submenu 3.4">
                                    <MenuItem>submenu 3.4.1 </MenuItem>
                                    <MenuItem>submenu 3.4.2 </MenuItem>
                                    <MenuItem>submenu 3.4.3 </MenuItem>
                                    <SubMenu title="submenu 3.5">
                                        <MenuItem>submenu 3.5.1 </MenuItem>
                                        <MenuItem>submenu 3.5.2 </MenuItem>
                                        <MenuItem>submenu 3.5.3 </MenuItem>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="About"
                        icon={<FaInfoCircle />}
                    >
                        <MenuItem
                            onClick={(e) =>
                                copyToClipboard(e.currentTarget.innerText)
                            }
                        >
                            Version: 0.1.0
                        </MenuItem>
                        <MenuItem
                            onClick={(e) =>
                                copyToClipboard(e.currentTarget.innerText)
                            }
                        >
                            Build time: 2021.01.01.
                        </MenuItem>
                        <MenuItem
                            onClick={(e) =>
                                copyToClipboard(e.currentTarget.innerText)
                            }
                        >
                            Electron version: 123
                        </MenuItem>
                        <MenuItem
                            onClick={(e) =>
                                copyToClipboard(e.currentTarget.innerText)
                            }
                        >
                            Node.JS version: 123
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Help" icon={<MdHelp />}>
                        <MenuItem>HELP!</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '15px 0px',
                    }}
                >
                    <a
                        href="https://github.com/TMD44/mvp"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://discord.com/"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord />
                        <span>Discord</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
}
