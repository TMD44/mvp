import React, { useState } from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
    TextField,
    Box,
    IconButton,
} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { MainType } from '@app/components/Main/MainType';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import store from '@redux/store';
import { addPlaylist, deletePlaylist } from '@redux/actions/mediaActions';
import { useSelector } from 'react-redux';
import { playlistsSelector } from '@redux/selectors/mediaSelector';

interface PropsShape {
    handleMainOpen: (type: MainType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function PlaylistsMenuItem({
    handleMainOpen,
    sideBarIsOpen,
}: PropsShape) {
    const playlists = useSelector(playlistsSelector);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip
                title="Playlists"
                arrow
                placement="right"
                disableHoverListener={!!sideBarIsOpen}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PlaylistPlayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Playlists" />
                </ListItem>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {Object.keys(playlists).map((playlist) => {
                    return (
                        <MenuItem
                            key={playlist}
                            onClick={() =>
                                handleMainOpen('Playlists', playlist)
                            }
                        >
                            <ListItemText primary={playlist} />
                            <IconButton
                                aria-label="Delete playlist"
                                onClick={() => {
                                    store.dispatch(deletePlaylist(playlist));
                                }}
                                edge="end"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </MenuItem>
                    );
                })}
                <MenuItem>
                    <Box component="form">
                        <TextField
                            label="Add new Playlist"
                            variant="standard"
                            onChange={(event) =>
                                setNewPlaylistName(event.target.value)
                            }
                            value={newPlaylistName}
                        />
                        <IconButton
                            aria-label="Add new playlist"
                            onClick={() => {
                                store.dispatch(addPlaylist(newPlaylistName));
                                setNewPlaylistName('');
                            }}
                            edge="end"
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </Box>
                </MenuItem>
            </Menu>
        </>
    );
}
