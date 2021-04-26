import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { scan } from './scan/scan';

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
        root: {
            display: 'flex',
            alignItems: 'center',
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    })
);

export function Step2OfflineScan({ handleNext, handleBack }: PropsShape) {
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();

    const importSources = async () => {
        const isLoaded = await scan.offlineScan();
        // if (isLoaded) setIsLoading(false);
        setTimeout(() => {
            if (isLoaded) setIsLoading(false);
        }, 500);
    };

    return (
        <>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                        onClick={() => {
                            setIsLoading(true);
                            importSources();
                        }}
                    >
                        Import sources
                    </Button>
                    {isLoading && (
                        <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                        />
                    )}
                </div>
            </div>
            <div className={classes.actionsContainer}>
                <div>
                    <Button
                        onClick={handleBack}
                        disabled={isLoading}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
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
