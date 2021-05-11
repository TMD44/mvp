import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Tooltip,
} from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { SiImdb } from 'react-icons/si';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CropDinIcon from '@material-ui/icons/CropDin';
import { ipcRenderer } from '@app/ipcRenderer';
import store from '@redux/store';
import {
    addCoverToMedia,
    deleteCoverFromMedia,
    deleteMedia,
} from '@redux/actions/mediaActions';
import { MediaAddToPlaylist } from './MediaAddToPlaylist';

type ActionTypes = 'DeleteMedia' | '';

interface PropsShape {
    id: string;
    obj: any;
}

export const MediaOperations = ({ id, obj }: PropsShape) => {
    const currentMedia = getDataByID(id).metadata;

    const [checkModal, setCheckModal] = useState(false);
    const [actionType, setActionType] = useState('' as ActionTypes);

    const handleCheckModalOpen = (type: ActionTypes) => {
        setActionType(type);
        setCheckModal(true);
    };

    const handleCheckModalClose = (answer: 'YES' | 'NO') => {
        setCheckModal(false);
        if (answer === 'YES') {
            switch (actionType) {
                case 'DeleteMedia':
                    obj.obj.id.forEach((currentID: string) =>
                        store.dispatch(
                            deleteMedia(currentID, currentMedia.title)
                        )
                    );
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <>
            <MediaAddToPlaylist obj={obj} />
            <Tooltip
                title={
                    currentMedia.poster_path
                        ? 'Delete cover image'
                        : 'Add cover image'
                }
                arrow
                placement="top"
            >
                <IconButton
                    aria-label="cover"
                    onClick={() => {
                        if (currentMedia.poster_path) {
                            store.dispatch(deleteCoverFromMedia(id));
                        } else {
                            ipcRenderer
                                .openCoverSelector()
                                .forEach((path: string) =>
                                    store.dispatch(addCoverToMedia(id, path))
                                );
                        }
                    }}
                >
                    {currentMedia.poster_path ? (
                        <CropDinIcon />
                    ) : (
                        <ImageSearchIcon />
                    )}
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete media" arrow placement="top">
                <IconButton
                    aria-label="Delete media"
                    onClick={() => {
                        handleCheckModalOpen('DeleteMedia');
                    }}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </Tooltip>

            {currentMedia.imdb_url ? (
                <Tooltip title="Open IMDB" arrow placement="top">
                    <IconButton
                        aria-label="imdb"
                        // disabled={!currentMedia.imdb_url}
                        href={currentMedia.imdb_url}
                        target="_blank"
                    >
                        <SiImdb />
                    </IconButton>
                </Tooltip>
            ) : (
                ''
            )}

            <Dialog
                open={checkModal}
                onClose={handleCheckModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to perform this action?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action will be final, you will not be able to undo
                        it! <br /> Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => handleCheckModalClose('NO')}
                        autoFocus
                        variant="contained"
                        color="primary"
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => handleCheckModalClose('YES')}
                        variant="contained"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
