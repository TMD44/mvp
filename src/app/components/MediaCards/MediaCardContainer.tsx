import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    ListSubheader,
    TablePagination,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { mediaSelector } from '@redux/selectors/mediaSelector';
import { MediaCardList } from './MediaCardList';

interface PropsShape {
    title: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: 'transparent',
        },
        gridList: {
            width: '100%',
            height: '100%',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    })
);

export function MediaCardContainer({ title }: PropsShape) {
    const allMedia = useSelector(mediaSelector);
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const data = Object.entries(allMedia);

    const handleChange = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    return (
        <div className={classes.root}>
            <TablePagination
                className="pagination"
                component="div"
                count={data.length}
                page={currentPage}
                onChangePage={handleChange}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 25, 50, 100]}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

            <GridList cellHeight={50} className={classes.gridList}>
                <GridListTile
                    key="MOVIE_LIST"
                    cols={2}
                    style={{ height: 'auto' }}
                >
                    <ListSubheader component="div">
                        {data.length === 0 ? 'NO MEDIA YET' : title}
                    </ListSubheader>
                </GridListTile>

                <MediaCardList
                    data={data.slice(
                        currentPage * rowsPerPage,
                        currentPage * rowsPerPage + rowsPerPage
                    )}
                />
            </GridList>
            <TablePagination
                className="pagination"
                component="div"
                count={data.length}
                page={currentPage}
                onChangePage={handleChange}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 25, 50, 100]}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}
