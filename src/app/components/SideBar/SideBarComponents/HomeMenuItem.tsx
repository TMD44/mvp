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
    setMainType: (type: MainType) => void;
    sideBarIsOpen: boolean;
}

export function HomeMenuItem({ setMainType, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="Home"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => setMainType('Home')}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Tooltip>
    );
}
