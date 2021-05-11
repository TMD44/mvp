import React from 'react';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Tooltip,
} from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { ipcRenderer } from '@app/ipcRenderer';

interface PropsShape {
    videoArray: any[];
    handleVideoPlayerOpen: () => void;
}

export const MediaDetailsPlay = ({
    videoArray,
    handleVideoPlayerOpen,
}: PropsShape) => {
    return (
        <Table
            aria-label="simple table"
            size="small"
            className="detailsPlayTable"
        >
            {/* <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell align="right">File Path</TableCell>
                    </TableRow>
                </TableHead> */}
            <Tooltip title="Play in MVP" arrow placement="top">
                <TableBody>
                    {videoArray.map((video) => {
                        const vidTitle =
                            video.metadata.media_type === 'movie'
                                ? 'MOVIE'
                                : `S${video.metadata.season || '<UNKNOWN>'}-E${
                                      video.metadata.episode || '<UNKNOWN>'
                                  }`;

                        return (
                            <TableRow
                                key={video.id}
                                onClick={handleVideoPlayerOpen}
                                hover
                            >
                                <TableCell>
                                    <Tooltip
                                        title="Play in default player"
                                        arrow
                                        placement="top"
                                    >
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                ipcRenderer.openInDefaultPlayer(
                                                    video.full_path
                                                );
                                            }}
                                            aria-label="close"
                                        >
                                            <PlayCircleFilledIcon className="detailsPlayIcon" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>

                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={video.id}
                                >
                                    {vidTitle}
                                </TableCell>
                                <TableCell align="right">
                                    {video.media_name}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Tooltip>
        </Table>
    );
};
