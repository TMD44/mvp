import React from 'react';
import clsx from 'clsx';
import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from '@material-ui/core/styles';
import {
    Drawer,
    List,
    CssBaseline,
    Divider,
    IconButton,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ModalType } from '../Modals/ModalType';
import { SideBarFooter } from './SideBarComponents/SideBarFooter';
import { AboutMenuItem } from './SideBarComponents/AboutMenuItem';
import { SettingsMenuItem } from './SideBarComponents/SettingsMenuItem';
import { SourceImporterMenuItem } from './SideBarComponents/SourceImporterMenuItem';
import { HomeMenuItem } from './SideBarComponents/HomeMenuItem';
import { MoviesMenuItem } from './SideBarComponents/MoviesMenuItem';
import { SeriesMenuItem } from './SideBarComponents/SeriesMenuItem';
import { GenresMenuItem } from './SideBarComponents/GenresMenuItem';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
    handleSideBarClose: () => void;
}

export const SIDEBAR_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: SIDEBAR_WIDTH,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: SIDEBAR_WIDTH,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export function SideBar({
    handleModalOpen,
    sideBarIsOpen,
    handleSideBarClose,
}: PropsShape) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: sideBarIsOpen,
                    [classes.drawerClose]: !sideBarIsOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: sideBarIsOpen,
                        [classes.drawerClose]: !sideBarIsOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleSideBarClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <HomeMenuItem handleModalOpen={handleModalOpen} />
                    <MoviesMenuItem handleModalOpen={handleModalOpen} />
                    <SeriesMenuItem handleModalOpen={handleModalOpen} />
                    <GenresMenuItem handleModalOpen={handleModalOpen} />
                </List>
                <Divider />
                <List>
                    <SourceImporterMenuItem handleModalOpen={handleModalOpen} />
                </List>
                <Divider />
                <List>
                    <SettingsMenuItem handleModalOpen={handleModalOpen} />
                    <AboutMenuItem handleModalOpen={handleModalOpen} />
                </List>
                <SideBarFooter />
            </Drawer>
        </div>
    );
}
