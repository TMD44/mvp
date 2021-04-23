import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function HomeMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </>
    );
}
