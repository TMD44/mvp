import React from 'react';
import { Home } from './Home';
import { Movies } from './Movies';
import { Series } from './Series';
import { MainType } from './MainType';
import { Playlists } from './Playlists';

interface PropsShape {
    mainType: MainType;
}

export function MainController({ mainType }: PropsShape) {
    switch (mainType) {
        case 'Home':
            return <Home />;

        case 'Movies':
            return <Movies />;

        case 'Series':
            return <Series />;

        case 'Playlists':
            return <Playlists />;

        default:
            return <Home />;
    }
}
