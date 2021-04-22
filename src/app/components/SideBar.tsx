/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
    FaHeart,
    FaFileImport,
    FaVideo,
    FaGithub,
    FaDiscord,
} from 'react-icons/fa';
import { MdSettings, MdDelete, MdHelp } from 'react-icons/md';
import Hamburger from 'hamburger-react';
import mvp from '@assets/images/mvp.jpg';
import { ModalType } from './Modals/ModalType';

interface PropsShape {
    collapsed: boolean;
    position: boolean;
    toggled: boolean;
    handleToggleSidebar: (checked: boolean) => void;
    handleCollapsedChange: (checked: boolean) => void;
    handleModal: (type: ModalType, message?: string) => void;
}

export function SideBar({
    collapsed,
    position,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange,
    handleModal,
}: PropsShape) {
    const [isOpen, setOpen] = useState(false);

    const handleHamburgerMenu = () => {
        setOpen(!isOpen);
        handleCollapsedChange(!collapsed);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        handleModal('Message', 'Copied to clipboard!');
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
                        onClick={() => handleModal('SourceImport')}
                        icon={<FaHeart />}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleModal('SourceImport')}
                        icon={<FaHeart />}
                    >
                        Movies
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleModal('SourceImport')}
                        icon={<FaHeart />}
                    >
                        Series
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleModal('SourceImport')}
                        icon={<FaHeart />}
                    >
                        Genres
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem
                        onClick={() => handleModal('SourceImport')}
                        icon={<FaFileImport />}
                    >
                        Source importer
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem
                        onClick={() => handleModal('Media')}
                        icon={<FaVideo />}
                    >
                        OPEN MEDIA MODAL (TEMP)
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem
                        onClick={() => handleModal('Settings')}
                        icon={<MdSettings />}
                    >
                        Settings
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
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