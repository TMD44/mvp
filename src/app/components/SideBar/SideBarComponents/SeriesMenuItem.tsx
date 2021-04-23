import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import TvIcon from '@material-ui/icons/Tv';
import { MainType } from '@app/components/Main/MainType';

interface PropsShape {
    setMainType: (type: MainType) => void;
    sideBarIsOpen: boolean;
}

export function SeriesMenuItem({ setMainType, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="Series"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => setMainType('Series')}>
                <ListItemIcon>
                    <TvIcon />
                </ListItemIcon>
                <ListItemText primary="Series" />
            </ListItem>
        </Tooltip>
    );
}
