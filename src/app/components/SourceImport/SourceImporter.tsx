import React, { useState } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
    Button,
} from '@material-ui/core';
import { store } from '@redux/store';
import { addScanPath, deleteAllScanPaths } from '@redux/actions/configActions';
import { ipcRenderer } from '@app/ipcRenderer';
import { scan } from './scan';

export function importSourcesButton() {
    scan.offlineScan();
}

export function importWithMetadata() {
    scan.onlineScan();
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
        // store.dispatch(scanPrefs.deleteAllScanResults());
        ipcRenderer
            .openDirSync()
            .forEach((path: string) => store.dispatch(addScanPath(path)));
    };

    const deleteDirs = () => {
        store.dispatch(deleteAllScanPaths());
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
