import React from 'react';
import { Home } from './Home';
import { Movies } from './Movies';
import { Series } from './Series';
import { MainType } from './MainType';
import { Playlists } from './Playlists';

interface PropsShape {
    mainType: MainType;
    message: string;
}

export function MainController({ mainType, message }: PropsShape) {
    switch (mainType) {
        case 'Home':
            return <Home />;

        case 'Movies':
            return <Movies />;

        case 'Series':
            return <Series />;

        case 'Playlists':
            return <Playlists message={message} />;

        default:
            return <Home />;
    }
}
