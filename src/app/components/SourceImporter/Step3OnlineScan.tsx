import React, { useState } from 'react';
import { resolve } from 'dns';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { scan } from './scan/scan';

interface PropsShape {
    handleModalClose: () => void;
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

export const Step3OnlineScan = ({
    handleModalClose,
    handleBack,
}: PropsShape) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const classes = useStyles();

    const onlineScan = async () => {
        const isLoaded = await scan.onlineScan();
        // if (isLoaded) setIsLoading(false);
        setTimeout(() => {
            if (isLoaded) setIsLoading(false);
        }, 500);
    };

    setInterval(() => {
        resolve('www.google.com', (err) => {
            if (err) {
                setIsOnline(false);
            }
            setIsOnline(true);
        });
    }, 1000);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!isOnline || isLoading}
                        onClick={() => {
                            setIsLoading(true);
                            onlineScan();
                        }}
                    >
                        Download metadata
                    </Button>
                    {isLoading && (
                        <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                        />
                    )}
                    {isOnline ? (
                        ' '
                    ) : (
                        <h3>
                            <CircularProgress size={15} />
                            {'  '} Offline. Checking for internet
                            connectivity...
                        </h3>
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
                        // color="primary"
                        disabled={isLoading}
                        onClick={handleModalClose}
                        className={classes.button}
                    >
                        Finish
                    </Button>
                </div>
            </div>
        </>
    );
};
