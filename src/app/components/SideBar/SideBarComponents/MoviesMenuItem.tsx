import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import { MainType } from '@app/components/Main/MainType';

interface PropsShape {
    handleMainOpen: (type: MainType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function MoviesMenuItem({ handleMainOpen, sideBarIsOpen }: PropsShape) {
    return (
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
    );
}
