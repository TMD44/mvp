import React from 'react';
import { Container } from '@material-ui/core';
import { seriesSelector } from '@redux/selectors/mediaSelector';
import { useSelector } from 'react-redux';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Series() {
    const series = useSelector(seriesSelector);

    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer title="Series" data={Object.entries(series)} />
        </Container>
    );
}
