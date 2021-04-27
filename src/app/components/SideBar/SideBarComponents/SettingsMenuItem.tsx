import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function SettingsMenuItem({
    handleModalOpen,
    sideBarIsOpen,
}: PropsShape) {
    return (
        <>
            <Tooltip
                title="Message"
                arrow
                placement="right"
                disableHoverListener={!!sideBarIsOpen}
            >
                <ListItem
                    button
                    onClick={() =>
                        handleModalOpen('Message', 'This is a message')
                    }
                >
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Message" />
                </ListItem>
            </Tooltip>
            <Tooltip
                title="Settings"
                arrow
                placement="right"
                disableHoverListener={!!sideBarIsOpen}
            >
                <ListItem button onClick={() => handleModalOpen('Settings')}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </Tooltip>
        </>
    );
}
