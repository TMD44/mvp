/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
    ListItemText,
    ListItem,
    List,
    Box,
    Typography,
} from '@material-ui/core';

interface PropsShape {
    value: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function Settings({ value }: PropsShape) {
    return (
        <>
            <TabPanel value={value} index={0}>
                Item One
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemText
                            primary="PRIMARY TEXT"
                            secondary="SECONDARY TEXT"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="NOTHING TO SEE HERE YET"
                            secondary="NOTHING TO SEE HERE YET"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
                <List>
                    <ListItem button>
                        <ListItemText
                            primary="NOTHING TO SEE HERE YET"
                            secondary="NOTHING TO SEE HERE YET"
                        />
                    </ListItem>
                </List>
            </TabPanel>
        </>
    );
}
