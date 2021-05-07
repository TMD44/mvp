import React from 'react';
import {
    Dialog,
    Backdrop,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { getAppInfo } from '@redux/selectors/configSelector';
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
                        <span>
                            <b>Version: </b>
                            <i>{getAppInfo().app_version}</i>
                        </span>
                    </ListItem>
                    <ListItem>
                        <span>
                            <b>Node.JS version: </b>
                            <i>{process.versions.node}</i>
                        </span>
                    </ListItem>
                    <ListItem>
                        <span>
                            <b>Electron version: </b>
                            <i>{process.versions.electron}</i>
                        </span>
                    </ListItem>
                    <ListItem>
                        <span>
                            <b>Chrome version: </b>
                            <i>{process.versions.chrome}</i>
                        </span>
                    </ListItem>
                </List>
                <List dense>
                    <ListItem>
                        <span>
                            <a
                                href="https://github.com/TMD44/mvp/issues"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Report bug on Github Issues
                            </a>
                        </span>
                    </ListItem>
                </List>
            </div>
        </Dialog>
    );
}
