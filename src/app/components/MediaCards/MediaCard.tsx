import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { MediaModal } from '../Modals/MediaModal';

interface PropsShape {
    id: string;
    title: string;
    coverImage: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            margin: '5px',
            width: '240px',
            height: '400px',
        },
        media: {
            height: '100%',
            paddingTop: '56.25%', // 16:9
        },
    })
);

export function MediaCard({ id, title, coverImage }: PropsShape) {
    const classes = useStyles();
    const [mediaModalIsOpen, setMediaModalIsOpen] = useState(false);

    const handleModalOpen = () => setMediaModalIsOpen(true);
    const handleModalClose = () => setMediaModalIsOpen(false);

    return (
        <>
            <Card key={id} className={classes.root} onClick={handleModalOpen}>
                <CardHeader
                    title={title || '<NO TITLE>'}
                    titleTypographyProps={{
                        className: 'cardTitle',
                        // title.length > 23 ? 'cardTitleAnim' : 'cardTitle',
                    }}
                />
                <CardMedia
                    className={classes.media}
                    image={coverImage}
                    title="COVER"
                />
            </Card>

            <MediaModal
                handleModalClose={handleModalClose}
                modalIsOpen={mediaModalIsOpen}
                id={title} // {id}
            />
        </>
    );
}
