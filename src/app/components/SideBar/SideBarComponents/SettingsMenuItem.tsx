import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function SettingsMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button onClick={() => handleModalOpen('Media')}>
                <ListItemIcon>
                    <PlayCircleFilledIcon />
                </ListItemIcon>
                <ListItemText primary="MEDIA" />
            </ListItem>
            <ListItem button onClick={() => handleModalOpen('Settings')}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </>
    );
}
