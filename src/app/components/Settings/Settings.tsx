/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
    ListItemText,
    ListItem,
    List,
    Box,
    Typography,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';
import store from '@redux/store';
import { purgeAllMedia } from '@redux/actions/mediaActions';
import { ipcRenderer } from '@app/ipcRenderer';

type AnswerTypes = 'YES' | 'NO';
type ActionTypes = 'PurgeAllMedia' | '';

interface PropsShape {
    value: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`settings-tabpanel-${index}`}
            aria-labelledby={`settings-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function Settings({ value }: PropsShape) {
    const [checkModal, setCheckModal] = useState(false);
    const [actionType, setActionType] = useState('' as ActionTypes);

    const handleCheckModalOpen = (type: ActionTypes) => {
        setActionType(type);
        setCheckModal(true);
    };

    const handleCheckModalClose = (answer: AnswerTypes) => {
        setCheckModal(false);
        if (answer === 'YES') {
            switch (actionType) {
                case 'PurgeAllMedia':
                    store.dispatch(purgeAllMedia());
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <>
            <TabPanel value={value} index={0}>
                <List>
                    <ListItem button onClick={() => ipcRenderer.openDevTools()}>
                        <ListItemText
                            primary="Open DevTools"
                            secondary="This action will open the DevTools window"
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => handleCheckModalOpen('PurgeAllMedia')}
                    >
                        <ListItemText
                            primary="Purge all media data"
                            secondary="This action will delete all media that you scanned"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="NOTHING TO SEE HERE YET"
                            secondary="NOTHING TO SEE HERE YET"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="NOTHING TO SEE HERE YET"
                            secondary="NOTHING TO SEE HERE YET"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <Dialog
                open={checkModal}
                onClose={handleCheckModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to perform this action?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action will be final, you will not be able to undo
                        it! Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => handleCheckModalClose('NO')}
                        autoFocus
                        variant="contained"
                        color="primary"
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => handleCheckModalClose('YES')}
                        variant="contained"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
