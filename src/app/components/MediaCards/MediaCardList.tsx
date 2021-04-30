import React from 'react';
import { MediaCard } from './MediaCard';

interface PropsShape {
    data: string[];
}

export function MediaCardList({ data }: PropsShape) {
    return (
        <>
            {data.map(([id, obj]) => {
                // TODO: not the 0. element of array, rather than the element that has the most metadata
                return <MediaCard key={obj.id[0]} id={obj.id[0]} />;
            })}
        </>
    );
}
