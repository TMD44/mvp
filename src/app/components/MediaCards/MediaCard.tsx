import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { MediaModal } from '../Modals/MediaModal';

interface PropsShape {
    id: string;
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

export function MediaCard({ id }: PropsShape) {
    const classes = useStyles();
    const [mediaModalIsOpen, setMediaModalIsOpen] = useState(false);

    const handleModalOpen = () => setMediaModalIsOpen(true);
    const handleModalClose = () => setMediaModalIsOpen(false);

    const currentMedia = getDataByID(id).metadata;

    return (
        <>
            <Card key={id} className={classes.root} onClick={handleModalOpen}>
                <CardHeader
                    title={currentMedia.title || '<NO TITLE>'}
                    titleTypographyProps={{
                        // 'cardTitle',
                        className:
                            currentMedia.title.length > 20
                                ? 'cardTitleAnim'
                                : 'cardTitle',
                    }}
                />
                <CardMedia
                    className={classes.media}
                    image={
                        currentMedia.poster_path
                            ? currentMedia.poster_path
                            : 'G:/mvp/assets/images/cover.jpg'
                    }
                    title="COVER"
                />
            </Card>

            <MediaModal
                handleModalClose={handleModalClose}
                modalIsOpen={mediaModalIsOpen}
                id={id}
            />
        </>
    );
}
