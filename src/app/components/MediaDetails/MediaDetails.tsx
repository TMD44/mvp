import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { getDataByID } from '@scripts/getDataByID';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface PropsShape {
    id: string;
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

export function MediaDetails({ id }: PropsShape) {
    console.log('ID2: ', id);
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
                                    : 'G:/mvp/assets/images/cover.jpg'
                            }
                            alt="COVER"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <div className="mediaInfos">
                            <h3>
                                ORIGINAL TITLE: {currentMedia.original_title}
                            </h3>
                            <h3>YEAR: {currentMedia.release_date}</h3>
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
}
