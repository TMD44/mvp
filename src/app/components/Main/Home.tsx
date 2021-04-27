import { Container } from '@material-ui/core';
import React from 'react';
import { MediaCardContainer } from '../MediaCards/MediaCardContainer';

export function Home() {
    return (
        <Container maxWidth="xl" id="mainContainer">
            <MediaCardContainer title="" />
        </Container>
    );
}
