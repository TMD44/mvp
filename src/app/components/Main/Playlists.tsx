import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { playlistsSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

interface PropsShape {
    message: string;
}

export function Playlists({ message }: PropsShape) {
    const playlists = useSelector(playlistsSelector);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer
                title=""
                data={Object.entries(
                    playlists[message] ? playlists[message].contents : {}
                )}
            />
        </Container>
    );
}
