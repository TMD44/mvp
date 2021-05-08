import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { MainType } from '@app/components/Main/MainType';

interface PropsShape {
    handleMainOpen: (type: MainType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function HomeMenuItem({ handleMainOpen, sideBarIsOpen }: PropsShape) {
    return (
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
    );
}
