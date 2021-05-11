import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Tooltip,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import { MainType } from '@type/MainType';
import { ModalType } from '@type/ModalType';
import { PlaylistsMenuItem } from './PlaylistsMenuItem';

interface PropsShape {
    handleMainOpen: (type: MainType, message?: string) => void;
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export const MenuItems = ({
    handleMainOpen,
    handleModalOpen,
    sideBarIsOpen,
}: PropsShape) => {
    return (
        <>
            <List>
                <Tooltip
                    title="Home"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem button onClick={() => handleMainOpen('Home')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Tooltip>
                <Tooltip
                    title="Movies"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem button onClick={() => handleMainOpen('Movies')}>
                        <ListItemIcon>
                            <MovieIcon />
                        </ListItemIcon>
                        <ListItemText primary="Movies" />
                    </ListItem>
                </Tooltip>
                <Tooltip
                    title="Series"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem button onClick={() => handleMainOpen('Series')}>
                        <ListItemIcon>
                            <TvIcon />
                        </ListItemIcon>
                        <ListItemText primary="Series" />
                    </ListItem>
                </Tooltip>
                <PlaylistsMenuItem
                    handleMainOpen={handleMainOpen}
                    sideBarIsOpen={sideBarIsOpen}
                />
            </List>
            <Divider />
            <List>
                <Tooltip
                    title="Source Importer"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem
                        button
                        onClick={() => handleModalOpen('SourceImport')}
                    >
                        <ListItemIcon>
                            <ImportExportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Source Importer" />
                    </ListItem>
                </Tooltip>
            </List>
            <Divider />
            <List>
                <Tooltip
                    title="Settings"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem
                        button
                        onClick={() => handleModalOpen('Settings')}
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Tooltip>
                <Tooltip
                    title="About"
                    arrow
                    placement="right"
                    disableHoverListener={!!sideBarIsOpen}
                >
                    <ListItem button onClick={() => handleModalOpen('About')}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </Tooltip>
            </List>
        </>
    );
};
