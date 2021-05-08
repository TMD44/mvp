import React, { useState } from 'react';
import {
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { useSelector } from 'react-redux';
import { playlistsSelector } from '@redux/selectors/mediaSelector';
import {
    addMediaToPlaylist,
    deleteMediaFromPlaylist,
} from '@redux/actions/mediaActions';
import store from '@redux/store';

interface PropsShape {
    obj: any;
}

export function MediaAddToPlaylist({ obj }: PropsShape) {
    const playlists = useSelector(playlistsSelector);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                aria-label="Add to playlist playlist"
                onClick={handleClick}
                edge="end"
            >
                <PlaylistAddIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {console.log(playlists)}
                {Object.keys(playlists).length === 0 ? (
                    <ListItemText primary="NOT A SINGLE PLAYLIST YET" />
                ) : (
                    ''
                )}
                {Object.entries(playlists).map(([playlist, contents]) => {
                    return (
                        <MenuItem key={playlist} style={{ minWidth: '250px' }}>
                            <ListItemIcon
                                onClick={() => {
                                    store.dispatch(
                                        addMediaToPlaylist(
                                            obj.id,
                                            obj.obj,
                                            playlist
                                        )
                                    );
                                    handleClose();
                                }}
                            >
                                {contents.contents[obj.id] ? (
                                    <PlaylistAddCheckIcon />
                                ) : (
                                    <PlaylistAddIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText
                                primary={playlist}
                                onClick={() => {
                                    store.dispatch(
                                        addMediaToPlaylist(
                                            obj.id,
                                            obj.obj,
                                            playlist
                                        )
                                    );
                                    handleClose();
                                }}
                            />
                            <IconButton
                                aria-label="Delete playlist"
                                onClick={() => {
                                    store.dispatch(
                                        deleteMediaFromPlaylist(
                                            obj.id,
                                            playlist
                                        )
                                    );
                                }}
                                disabled={!contents.contents[obj.id]}
                                edge="end"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
}
