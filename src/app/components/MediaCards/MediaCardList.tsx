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
                        title={media.unsure_metadata.filename_data.title}
                        path={media.full_path}
                        coverImage={media.cover}
                    />
                );
            })}
        </>
    );
}
