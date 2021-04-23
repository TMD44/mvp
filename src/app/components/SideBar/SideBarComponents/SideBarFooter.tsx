import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Link,
    Tooltip,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

// TODO: At low height github icon go into other icons

interface PropsShape {
    sideBarIsOpen: boolean;
}

export function SideBarFooter({ sideBarIsOpen }: PropsShape) {
    return (
        <Link
            href="https://github.com/TMD44/mvp"
            target="_blank"
            rel="noopener"
        >
            <Tooltip
                title="Github"
                arrow
                placement="right"
                disableHoverListener={!!sideBarIsOpen}
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
            </Tooltip>
        </Link>
    );
}
