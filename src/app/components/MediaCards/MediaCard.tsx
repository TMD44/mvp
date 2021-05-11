import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { getImagesPath } from '@scripts/getPaths';
import { MediaModal } from '../Modals/MediaModal';

interface PropsShape {
    id: string[];
    obj: any;
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
            height: '85%',
            width: '100%',
            // paddingTop: '56.25%', // 16:9
        },
    })
);

export const MediaCard = ({ id, obj }: PropsShape) => {
    const classes = useStyles();
    const [mediaModalIsOpen, setMediaModalIsOpen] = useState(false);

    const handleModalOpen = () => setMediaModalIsOpen(true);
    const handleModalClose = () => setMediaModalIsOpen(false);

    try {
        if (id) {
            const currentMedia = getDataByID(id[0]).metadata;

            return (
                <>
                    <Card
                        className={classes.root}
                        onClick={handleModalOpen}
                        raised
                    >
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
                        <img
                            className={classes.media}
                            src={
                                currentMedia.poster_path
                                    ? currentMedia.poster_path
                                    : getImagesPath('cover.png')
                            }
                            alt="cover"
                        />
                    </Card>

                    <MediaModal
                        handleModalClose={handleModalClose}
                        modalIsOpen={mediaModalIsOpen}
                        ids={id}
                        obj={obj}
                    />
                </>
            );
        }
    } catch (error) {
        console.error('Error at MediaCards.tsx: ', error);
    }

    return <> </>;
};
