import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function AboutMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <ListItem button onClick={() => handleModalOpen('About')}>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
    );
}

/*  OLDER VERSION
export function AboutMenuItem({ handleModalOpen }: PropsShape) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        handleModalOpen('Message', 'Copied to clipboard!');
    };

    return (
        <>
            <ListItem
                button
                onClick={(e) => handleClick(e)}
                onMouseOver={(e) => handleClick(e)}
            >
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                disableAutoFocusItem
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <MenuItem
                    onClick={() => handleCopyToClipboard('Version: 0.1.0')}
                >
                    Version: 0.1.0
                </MenuItem>
                <MenuItem
                    onClick={(e) =>
                        handleCopyToClipboard(e.currentTarget.innerText)
                    }
                >
                    Build time: 2021.01.01.
                </MenuItem>
                <MenuItem
                    onClick={(e) =>
                        handleCopyToClipboard(e.currentTarget.innerText)
                    }
                >
                    Electron version: 123
                </MenuItem>
                <MenuItem
                    onClick={(e) =>
                        handleCopyToClipboard(e.currentTarget.innerText)
                    }
                >
                    Node.JS version: 123
                </MenuItem>
            </Menu>
        </>
    );
}
*/
