import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { seriesSelector } from '@redux/selectors/mediaSelector';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Series() {
    const series = useSelector(seriesSelector);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer title="" data={Object.entries(series)} />
        </Container>
    );
}
