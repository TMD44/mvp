import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { MainType } from '@app/components/Main/MainType';

interface PropsShape {
    setMainType: (type: MainType) => void;
    sideBarIsOpen: boolean;
}

export function GenresMenuItem({ setMainType, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="Genres"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => setMainType('Genres')}>
                <ListItemIcon>
                    <EmojiEmotionsIcon />
                </ListItemIcon>
                <ListItemText primary="Genres" />
            </ListItem>
        </Tooltip>
    );
}
