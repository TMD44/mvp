import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
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
    })
);

export function Step3OnlineScan({ handleModalClose, handleBack }: PropsShape) {
    const classes = useStyles();

    const onlineScan = () => {
        scan.onlineScan();
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={onlineScan}
                className={classes.button}
            >
                Import sources and download metadata
            </Button>
            <br />
            <div className={classes.actionsContainer}>
                <div>
                    <Button onClick={handleBack} className={classes.button}>
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
        </>
    );
}
