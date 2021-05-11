import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { getImagesPath } from '@scripts/getPaths';
import { MediaOperations } from './MediaOperations';

interface PropsShape {
    id: string;
    obj: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

export const MediaDetails = ({ id, obj }: PropsShape) => {
    const currentMedia = getDataByID(id).metadata;
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>{currentMedia.title || 'TITLE'}</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            className="detailsImage"
                            src={
                                currentMedia.poster_path
                                    ? currentMedia.poster_path
                                    : getImagesPath('cover.png')
                            }
                            alt="COVER"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <div className="mediaInfos">
                            <MediaOperations id={id} obj={obj} />
                            <h3>
                                ORIGINAL TITLE:{' '}
                                {currentMedia.original_title ||
                                    currentMedia.original_name}
                            </h3>
                            <h3>
                                YEAR:{' '}
                                {currentMedia.release_date ||
                                    currentMedia.first_air_date}
                            </h3>
                            <h3>LANGUAGE: {currentMedia.original_language}</h3>
                            <h3>
                                GENRES:{' '}
                                {currentMedia.genres
                                    ? currentMedia.genres.toString()
                                    : 'NO GENRES'}
                            </h3>
                        </div>
                        <div className="mediaOverview">
                            <h3>OVERVIEW: {currentMedia.overview}</h3>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};
