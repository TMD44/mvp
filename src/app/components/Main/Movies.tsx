import { Container } from '@material-ui/core';
import { moviesSelector } from '@redux/selectors/mediaSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Movies() {
    const movies = useSelector(moviesSelector);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer title="" data={Object.entries(movies)} />
        </Container>
    );
}
