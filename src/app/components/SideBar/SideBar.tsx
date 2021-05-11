import React from 'react';
import clsx from 'clsx';
import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from '@material-ui/core/styles';
import { Drawer, CssBaseline, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ModalType } from '@type/ModalType';
import { MainType } from '@type/MainType';
import { SideBarFooter } from './SideBarComponents/SideBarFooter';
import { MenuItems } from './SideBarComponents/MenuItems';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
    handleSideBarClose: () => void;
    handleMainOpen: (type: MainType, message?: string) => void;
}

export const SIDEBAR_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

export const SideBar = ({
    handleModalOpen,
    sideBarIsOpen,
    handleSideBarClose,
    handleMainOpen,
}: PropsShape) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
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
                <MenuItems
                    handleMainOpen={handleMainOpen}
                    handleModalOpen={handleModalOpen}
                    sideBarIsOpen={sideBarIsOpen}
                />
                <SideBarFooter sideBarIsOpen={sideBarIsOpen} />
            </Drawer>
        </>
    );
};
