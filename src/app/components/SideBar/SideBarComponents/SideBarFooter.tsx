import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

// TODO: need a better solution for this!

export function SideBarFooter() {
    return (
        <Link
            href="https://github.com/TMD44/mvp"
            target="_blank"
            rel="noopener"
        >
            <ListItem
                button
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    overflow: 'hidden',
                }}
            >
                <ListItemIcon>
                    <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Github" />
            </ListItem>
        </Link>
    );
}
