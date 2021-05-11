import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { moviesSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export const Movies = () => {
    const movies = Object.entries(useSelector(moviesSelector));

    return (
        <Container maxWidth="xl" className="mainContainer">
            <MediaCardContainer title="" data={movies} />
        </Container>
    );
};
