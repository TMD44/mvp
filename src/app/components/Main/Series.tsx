import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { seriesSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export const Series = () => {
    const series = Object.entries(useSelector(seriesSelector));

    return (
        <Container maxWidth="xl" className="mainContainer">
            <MediaCardContainer title="" data={series} />
        </Container>
    );
};
