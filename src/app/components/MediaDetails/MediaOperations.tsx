import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { SiImdb } from 'react-icons/si';
import { MediaAddToPlaylist } from './MediaAddToPlaylist';

interface PropsShape {
    id: string;
    obj: any;
}

export function MediaOperations({ id, obj }: PropsShape) {
    const currentMedia = getDataByID(id).metadata;

    return (
        <>
            <Tooltip title="Open IMDB" arrow placement="top">
                <IconButton
                    aria-label="imdb"
                    disabled={!currentMedia.imdb_url}
                    href={currentMedia.imdb_url}
                    target="_blank"
                >
                    <SiImdb />
                </IconButton>
            </Tooltip>

            <MediaAddToPlaylist obj={obj} />
        </>
    );
}
