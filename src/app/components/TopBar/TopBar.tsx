import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SIDEBAR_WIDTH } from '../SideBar/SideBar';
import { SearchBar } from './SearchBar';

interface PropsShape {
    sideBarIsOpen: boolean;
    handleSideBarOpen: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: SIDEBAR_WIDTH,
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
    })
);

export function TopBar({ sideBarIsOpen, handleSideBarOpen }: PropsShape) {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: sideBarIsOpen,
                })}
            >
                <Toolbar className="topBar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleSideBarOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: sideBarIsOpen,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Multimedia Visualization Platform
                    </Typography>

                    <SearchBar />
                </Toolbar>
            </AppBar>
        </>
    );
}
