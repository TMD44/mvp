import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function MoviesMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Movies" />
            </ListItem>
        </>
    );
}
