import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { moviesSelector, seriesSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Home() {
    const movies = Object.entries(useSelector(moviesSelector));
    const series = Object.entries(useSelector(seriesSelector));
    const data = movies.concat(series);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer title="" data={data} />
        </Container>
    );
}
