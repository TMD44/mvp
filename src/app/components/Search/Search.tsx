import React from 'react';
import { Container } from '@material-ui/core';
import { moviesSelector, seriesSelector } from '@redux/selectors/mediaSelector';
import { useSelector } from 'react-redux';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Search() {
    const movies = Object.entries(useSelector(moviesSelector));
    const series = Object.entries(useSelector(seriesSelector));
    const data = movies.concat(series);

    console.log('DATA: ', data);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <h1>SEARCH: </h1>
        </Container>
    );
}
