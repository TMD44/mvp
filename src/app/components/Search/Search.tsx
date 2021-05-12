/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    createStyles,
    fade,
    makeStyles,
    Theme,
} from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import { moviesSelector, seriesSelector } from '@redux/selectors/mediaSelector';
import { getDataByID } from '@scripts/getDataByID';
import { MediaModal } from '../Modals/MediaModal';

// TODO: At low width search bar goes into title

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'absolute',
            right: '20px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.3),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.4),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '25ch',
                '&:focus': {
                    width: '50ch',
                },
            },
        },
    })
);

export const Search = () => {
    const classes = useStyles();
    const [mediaModalIsOpen, setMediaModalIsOpen] = useState(false);
    const [mediaID, setMediaID] = useState('');

    const movies = Object.entries(useSelector(moviesSelector));
    const series = Object.entries(useSelector(seriesSelector));
    const data = movies.concat(series);

    const handleModalOpen = () => setMediaModalIsOpen(true);
    const handleModalClose = () => setMediaModalIsOpen(false);

    const titles: any[] = [];

    if (data) {
        data.forEach(([, obj]) => {
            titles.push(getDataByID(obj.id[0]));
        });
    }

    const openMedia = (id) => {
        if (id !== 'NOT_FOUND') {
            setMediaID(id);
            handleModalOpen();
        }
    };

    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <Autocomplete
                    id="combo-box-demo"
                    options={titles}
                    getOptionLabel={(option) => option.metadata.title}
                    // forcePopupIcon={false}
                    style={{ width: 500 }}
                    onClose={(event) =>
                        openMedia(
                            titles.find(
                                (obj) =>
                                    obj.metadata.title ===
                                    event.target.textContent
                            )
                                ? titles.find(
                                      (obj) =>
                                          obj.metadata.title ===
                                          event.target.textContent
                                  ).id
                                : 'NOT_FOUND'
                        )
                    }
                    renderInput={(params) => {
                        const { InputLabelProps, InputProps, ...rest } = params;
                        return (
                            <InputBase
                                {...params.InputProps}
                                {...rest}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        );
                    }}
                />
            </div>
            <MediaModal
                handleModalClose={handleModalClose}
                modalIsOpen={mediaModalIsOpen}
                ids={
                    data.find(([, obj]) => obj.id.includes(mediaID))
                        ? data.find(([, obj]) => obj.id.includes(mediaID))[1].id
                        : []
                }
                // TODO: add obj here
                obj={
                    data.find(([, obj]) => obj.id.includes(mediaID))
                        ? {
                              id: data.find(([, obj]) =>
                                  obj.id.includes(mediaID)
                              )[1].id,
                              obj: data.find(([, obj]) =>
                                  obj.id.includes(mediaID)
                              )[1],
                          }
                        : {}
                }
            />
        </>
    );
};
