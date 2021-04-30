import React, { useState } from 'react';
import {
    createStyles,
    fade,
    makeStyles,
    Theme,
} from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MainType } from '../Main/MainType';

// TODO: At low width search bar go into title

interface PropsShape {
    setMainType: (type: MainType) => void;
}

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

// eslint-disable-next-line @typescript-eslint/no-shadow
export function SearchBar({ setMainType }: PropsShape) {
    const classes = useStyles();
    const [searchWord, setSearchWord] = useState('');

    const keyPress = (e) => {
        // Enter
        if (e.keyCode === 13) {
            console.log('searchWord: ', searchWord);
            setMainType('Search');
        }
    };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchWord}
                onInput={(e) => setSearchWord(e.target.value)}
                onKeyDown={keyPress}
            />
        </div>
    );
}
function setMainType(arg0: string) {
    throw new Error('Function not implemented.');
}
