import React from 'react';
import { MediaCard } from './MediaCard';

interface PropsShape {
    data: [string, unknown][];
}

export function MediaCardList({ data }: PropsShape) {
    return (
        <>
            {data.map(([id, media]) => {
                return (
                    <MediaCard
                        key={id}
                        id={id}
                        title={media.full_path}
                        coverImage={media.cover}
                    />
                );
            })}
        </>
    );
}
