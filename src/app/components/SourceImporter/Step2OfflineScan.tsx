import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { scan } from './scan/scan';

export function importWithMetadata() {
    scan.onlineScan();
}

interface PropsShape {
    handleNext: () => void;
    handleBack: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
    })
);

export function Step2OfflineScan({ handleNext, handleBack }: PropsShape) {
    const classes = useStyles();

    const importSources = () => {
        scan.offlineScan();
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={importSources}
                className={classes.button}
            >
                Import sources
            </Button>
            <div className={classes.actionsContainer}>
                <div>
                    <Button onClick={handleBack} className={classes.button}>
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
        </>
    );
}
