import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function AboutMenuItem({ handleModalOpen, sideBarIsOpen }: PropsShape) {
    return (
        <Tooltip
            title="About"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => handleModalOpen('About')}>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
        </Tooltip>
    );
}
