import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { mediaSelector } from '@redux/selectors/mediaSelector';
import { MediaModal } from '../Modals/MediaModal';

interface PropsShape {
    id: string;
    title: string;
    coverImage: string;
    path: string;
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

export function MediaCard({ id, title, coverImage, path }: PropsShape) {
    const classes = useStyles();
    const [mediaModalIsOpen, setMediaModalIsOpen] = useState(false);

    const handleModalOpen = () => setMediaModalIsOpen(true);
    const handleModalClose = () => setMediaModalIsOpen(false);

    const allMedia = useSelector(mediaSelector);
    const currentMedia = allMedia[id].metadata;

    return (
        <>
            <Card key={id} className={classes.root} onClick={handleModalOpen}>
                <CardHeader
                    title={currentMedia.title || '<NO TITLE>'}
                    titleTypographyProps={{
                        // 'cardTitle',
                        className:
                            title.length > 20 ? 'cardTitleAnim' : 'cardTitle',
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
