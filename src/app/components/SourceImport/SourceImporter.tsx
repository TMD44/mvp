import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
    Button,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { store } from '@redux/store';
import {
    addScanPath,
    deleteAllScanPaths,
    deleteScanPath,
} from '@redux/actions/configActions';
import { ipcRenderer } from '@app/ipcRenderer';
import {
    getScanPaths,
    scanPathsSelector,
} from '@redux/selectors/configSelector';
import { useSelector } from 'react-redux';
import { scan } from './scan';

export function importWithMetadata() {
    scan.onlineScan();
}

interface PropsShape {
    handleModalClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            flexGrow: 1,
            maxWidth: 752,
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    })
);

export function SourceImporter({ handleModalClose }: PropsShape) {
    const selectedScanPaths = useSelector(scanPathsSelector);

    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const openDirs = () => {
        // store.dispatch(scanPrefs.deleteAllScanResults());
        ipcRenderer
            .openDirSync()
            .forEach((path: string) => store.dispatch(addScanPath(path)));
    };

    const importSources = () => {
        scan.offlineScan();
    };

    const deleteDir = (path: string) => {
        store.dispatch(deleteScanPath(path));
    };

    const deleteAllDirs = () => {
        store.dispatch(deleteAllScanPaths());
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step key="ScanSettings1">
                <StepLabel>Open Directiores</StepLabel>
                <StepContent>
                    <Button variant="contained" onClick={openDirs}>
                        Open
                    </Button>
                    <Button variant="contained" onClick={deleteAllDirs}>
                        Delete All
                    </Button>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.title}>
                            Paths: <b>{selectedScanPaths.length}</b>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            {selectedScanPaths.length < 1
                                ? 'Open Dirs for scan'
                                : ''}
                        </Typography>
                    </Grid>
                    <div>
                        <List dense>
                            {selectedScanPaths.map((path: string) => {
                                return (
                                    <ListItem key={path}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={path} />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                onClick={() => deleteDir(path)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                    <div className={classes.actionsContainer}>
                        <div>
                            <Button
                                disabled
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </StepContent>
            </Step>
            <Step key="ScanSettings2">
                <StepLabel>Offline scan Settings</StepLabel>
                <StepContent>
                    <Button variant="contained" onClick={importSources}>
                        Import sources
                    </Button>
                    <br />
                    <div className={classes.actionsContainer}>
                        <div>
                            <Button
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </StepContent>
            </Step>
            <Step key="ScanSettings3">
                <StepLabel>Online scan Settings</StepLabel>
                <StepContent>
                    <Button variant="contained" onClick={importWithMetadata}>
                        Import sources and download metadata
                    </Button>
                    <br />
                    <div className={classes.actionsContainer}>
                        <div>
                            <Button
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleModalClose}
                                className={classes.button}
                            >
                                Finish
                            </Button>
                        </div>
                    </div>
                </StepContent>
            </Step>
        </Stepper>
    );
}
