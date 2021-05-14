/* eslint-disable global-require */
import React from 'react';
import os from 'os';
import child_process from 'child_process';
import { Dialog, Backdrop, List, ListItem, Divider } from '@material-ui/core';
import { getAppInfo } from '@redux/selectors/configSelector';
import { ModalTitleBar } from './ModalTitleBar';
import { TransitionRight } from './ModalTransitions';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
}

export const AboutModal = ({ handleModalClose, modalIsOpen }: PropsShape) => {
    let commitHash = 'main';
    let commitDate = 'UNKNOWN';

    try {
        commitHash = child_process
            .execSync('git rev-parse HEAD')
            .toString()
            .trim();
        commitDate = child_process
            .execSync('git log -1 --format=%cd')
            .toString()
            .trim();
    } catch (error) {
        // console.error('Error from AboutModal.tsx: ', error);
    }

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
                            <b>Last commit hash:</b>
                            <i>
                                <a
                                    href={`https://github.com/TMD44/mvp/commit/${commitHash}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {commitHash}
                                </a>
                            </i>
                        </span>
                    </ListItem>
                    {commitDate !== 'UNKNOWN' ? (
                        <ListItem>
                            <span>
                                <b>Last commit date: </b>
                                <i>{commitDate}</i>
                            </span>
                        </ListItem>
                    ) : (
                        ''
                    )}

                    <Divider />

                    <ListItem>
                        <span>
                            <b>OS version: </b>
                            <i>{`${os.version()} - ${os.release()}`}</i>
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
                    <ListItem>
                        <span>
                            <b>V8 version: </b>
                            <i>{process.versions.v8}</i>
                        </span>
                    </ListItem>
                </List>
                <List dense>
                    <ListItem>
                        <b>
                            <a
                                href="https://github.com/TMD44/mvp/issues"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Report bug on Github Issues
                            </a>
                        </b>
                    </ListItem>
                </List>
            </div>
        </Dialog>
    );
};
