import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TvIcon from '@material-ui/icons/Tv';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function SeriesMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <TvIcon />
                </ListItemIcon>
                <ListItemText primary="Series" />
            </ListItem>
        </>
    );
}
