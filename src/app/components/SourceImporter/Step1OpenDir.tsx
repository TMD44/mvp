import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
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
import { scanPathsSelector } from '@redux/selectors/configSelector';
import { useSelector } from 'react-redux';

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
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    })
);

export function Step1OpenDir({ handleNext, handleBack }: PropsShape) {
    const selectedScanPaths = useSelector(scanPathsSelector);
    const classes = useStyles();

    const openDirs = () => {
        // store.dispatch(scanPrefs.deleteAllScanResults());
        ipcRenderer
            .openDirSync()
            .forEach((path: string) => store.dispatch(addScanPath(path)));
    };

    const deleteDir = (path: string) => {
        store.dispatch(deleteScanPath(path));
    };

    const deleteAllDirs = () => {
        store.dispatch(deleteAllScanPaths());
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={openDirs}
                className={classes.button}
            >
                Open
            </Button>
            <Button
                variant="contained"
                onClick={deleteAllDirs}
                className={classes.button}
            >
                Delete All
            </Button>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                    Paths: <b>{selectedScanPaths.length}</b>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    {selectedScanPaths.length < 1 ? 'Open Dirs for scan' : ''}
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
        </>
    );
}
