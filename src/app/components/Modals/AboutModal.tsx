import React from 'react';
import {
    Dialog,
    Backdrop,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { ModalTitleBar } from './ModalTitleBar';
import { TransitionRight } from './ModalTransitions';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
}

export function AboutModal({ handleModalClose, modalIsOpen }: PropsShape) {
    return (
        <Dialog
            aria-labelledby="Source Importer"
            aria-describedby="Import the media source files"
            // fullScreen
            fullWidth
            maxWidth="sm" // 'lg','md','sm','xl','xs'
            open={modalIsOpen}
            onClose={handleModalClose}
            TransitionComponent={TransitionRight}
            TransitionProps={{ timeout: 300 }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                className: 'modalBackdrop',
            }}
        >
            <ModalTitleBar
                title="Source Importer"
                handleModalClose={handleModalClose}
            />
            <div className="modalPaper about">
                <h1>Multimedia Visualization Platform</h1>
                <List dense>
                    <ListItem>
                        <ListItemText primary="Version: 0.1.0" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Build time: 2021.01.01." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Electron version: 123" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Node.JS version: 123" />
                    </ListItem>
                </List>
            </div>
        </Dialog>
    );
}
