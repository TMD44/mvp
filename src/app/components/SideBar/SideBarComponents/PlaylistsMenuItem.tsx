import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { MainType } from '@app/components/Main/MainType';

interface PropsShape {
    setMainType: (type: MainType) => void;
    sideBarIsOpen: boolean;
}

export function PlaylistsMenuItem({ setMainType, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="Playlists"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => setMainType('Playlists')}>
                <ListItemIcon>
                    <PlaylistPlayIcon />
                </ListItemIcon>
                <ListItemText primary="Playlists" />
            </ListItem>
        </Tooltip>
    );
}
