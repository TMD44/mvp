import React, { useState } from 'react';
import { config } from '@main/configuration';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListSubheader from '@material-ui/core/ListSubheader';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
    Button,
} from '@material-ui/core';
import { scan } from './scan';
import { ipcRenderer } from './ipcRenderer';

export function importSourcesButton() {
    scan.offlineScan();
}

export function importWithMetadata() {
    scan.onlineScan();
}

export function deleteDirs() {
    config.purgeScanPaths();
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
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
    })
);

async function getArr() {
    const a = await config.getAny('scan_preferences', 'scan_paths');
    return Array(a);
}

const abs = getArr();
const arr = Array(abs);

export function SourceImporter() {
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

    const openDirButton = () => {
        config.purgeScanResults();
        ipcRenderer.openDirAsync();
        // const result = await config.getScanPaths();
        // console.log('RESULT: ', result);
        // setSelectedScanPaths(result);
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step key="ScanSettings1">
                <StepLabel>Scan Settings 1</StepLabel>
                <StepContent>
                    <Button variant="contained" onClick={openDirButton}>
                        Open DIR
                    </Button>
                    <Button variant="contained" onClick={deleteDirs}>
                        Delete DIRs
                    </Button>
                    <br />
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
                    <Button variant="contained" onClick={importSourcesButton}>
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
                                onClick={handleNext}
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
