import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { playlistsSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

interface PropsShape {
    message: string;
}

export const Playlists = ({ message }: PropsShape) => {
    const playlists = useSelector(playlistsSelector);

    return (
        <Container maxWidth="xl" className="mainContainer">
            <MediaCardContainer
                title={message}
                data={Object.entries(
                    playlists[message] ? playlists[message].contents : {}
                )}
            />
        </Container>
    );
};
