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
    setMainType: (type: MainType) => void;
    sideBarIsOpen: boolean;
}

export function MoviesMenuItem({ setMainType, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="Movies"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => setMainType('Movies')}>
                <ListItemIcon>
                    <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Movies" />
            </ListItem>
        </Tooltip>
    );
}
