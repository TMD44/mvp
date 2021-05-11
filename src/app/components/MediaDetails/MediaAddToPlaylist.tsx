import React, { useState } from 'react';
import {
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
} from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CloseIcon from '@material-ui/icons/Close';
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

export const MediaAddToPlaylist = ({ obj }: PropsShape) => {
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
            <Tooltip title="Add Playlist" arrow placement="top">
                <IconButton
                    aria-label="Add to playlist playlist"
                    onClick={handleClick}
                >
                    <PlaylistAddIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
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
                                    // handleClose();
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
                                    // handleClose();
                                }}
                            />
                            {contents.contents[obj.id] ? (
                                <Tooltip
                                    title="Delete media from playlist"
                                    arrow
                                    placement="top"
                                >
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
                                        // disabled={!contents.contents[obj.id]}
                                        edge="end"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                ''
                            )}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};
