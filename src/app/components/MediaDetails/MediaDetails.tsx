import { mediaSelector } from '@redux/selectors/mediaSelector';
import { getImagesPath } from '@scripts/getPaths';
import React from 'react';
import { useSelector } from 'react-redux';

interface PropsShape {
    id: string;
}

export function MediaDetails({ id }: PropsShape) {
    const allMedia = useSelector(mediaSelector);
    const currentMedia = allMedia[id].metadata;

    return (
        <>
            <h1>TITLE: {currentMedia.title}</h1>
            <h3>ORIGINAL TITLE: {currentMedia.original_title}</h3>
            <h3>YEAR: {currentMedia.release_date}</h3>
            <h3>ID: {currentMedia.id}</h3>
            <h3>LANGUAGE: {currentMedia.original_language}</h3>
            <h3>OVERVIEW: {currentMedia.overview}</h3>
            <h3>POSTER URL: {currentMedia.poster_path}</h3>
            <img
                src={
                    currentMedia.poster_path
                        ? currentMedia.poster_path
                        : 'G:/mvp/assets/images/cover.jpg'
                }
                alt="COVER"
            />
        </>
    );
}
