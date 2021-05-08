import React, { useState } from 'react';
import {
    Dialog,
    Backdrop,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Tabs,
    Tab,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionRight } from './ModalTransitions';
import { Settings } from '../Settings/Settings';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
}

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        settingsHeight: {
            minHeight: '80vh',
            maxHeight: '80vh',
        },
    })
);

export function SettingsModal({ handleModalClose, modalIsOpen }: PropsShape) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (
        event: React.ChangeEvent<Record<string, unknown>>,
        newValue: number
    ) => {
        setValue(newValue);
    };

    return (
        <Dialog
            aria-labelledby="Settings"
            aria-describedby="Settings"
            // fullScreen
            fullWidth
            maxWidth="lg" // 'lg','md','sm','xl','xs'
            open={modalIsOpen}
            onClose={handleModalClose}
            TransitionComponent={TransitionRight}
            TransitionProps={{ timeout: 300 }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                className: 'modalBackdrop',
            }}
            classes={{
                paper: classes.settingsHeight,
            }}
        >
            <AppBar className={classes.appBar}>
                <Toolbar className="modalTitleBar">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleModalClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Settings
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Subsettings"
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="scrollable"
                        scrollButtons="off"
                    >
                        <Tab label="Basic settings" id="settings-tab-0" />
                        <Tab label="Scan settings" id="settings-tab-1" />
                        {/* <Tab label="3" id="settings-tab-2" /> */}
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div className="modalPaper">
                <Settings value={value} />
            </div>
        </Dialog>
    );
}
