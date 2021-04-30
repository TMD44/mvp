import React from 'react';
import { Home } from './Home';
import { Movies } from './Movies';
import { Series } from './Series';
import { MainType } from './MainType';
import { Genres } from './Genres';
import { Playlists } from './Playlists';
import { Search } from '../Search/Search';

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

        case 'Genres':
            return <Genres />;

        case 'Playlists':
            return <Playlists />;

        case 'Search':
            return <Search />;

        default:
            return <Home />;
    }
}
