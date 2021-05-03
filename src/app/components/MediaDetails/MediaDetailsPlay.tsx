import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

interface PropsShape {
    videoArray: any[];
    handleVideoPlayerOpen: () => void;
}

export function MediaDetailsPlay({
    videoArray,
    handleVideoPlayerOpen,
}: PropsShape) {
    let KEEEY = 1;
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
                            key={KEEEY++}
                            onClick={handleVideoPlayerOpen}
                            hover
                        >
                            <TableCell>
                                <PlayCircleFilledIcon className="detailsPlayIcon" />
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
        </Table>
    );
}
