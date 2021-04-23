import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface PropsShape {
    title: string;
    handleModalClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    })
);

export function ModalTitleBar({ title, handleModalClose }: PropsShape) {
    const classes = useStyles();
    return (
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
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
