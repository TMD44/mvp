import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function GenresMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <EmojiEmotionsIcon />
                </ListItemIcon>
                <ListItemText primary="Genres" />
            </ListItem>
        </>
    );
}
