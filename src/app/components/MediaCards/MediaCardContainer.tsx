import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    ListSubheader,
    TablePagination,
} from '@material-ui/core';
import { MediaCard } from './MediaCard';

interface PropsShape {
    title: string;
    data: any;
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

export const MediaCardContainer = ({ title, data }: PropsShape) => {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
                labelRowsPerPage="Media per page"
            />

            <GridList cellHeight={50} className={classes.gridList}>
                <GridListTile
                    key="MOVIE_LIST"
                    cols={2}
                    style={{ height: 'auto' }}
                >
                    {data.length !== 0 ? (
                        <ListSubheader component="div">{title}</ListSubheader>
                    ) : (
                        <b className="noMediaYetText">
                            No media here yet, use Source Importer
                        </b>
                    )}
                </GridListTile>

                {data
                    .slice(
                        currentPage * rowsPerPage,
                        currentPage * rowsPerPage + rowsPerPage
                    )
                    .map(([id, obj]) => {
                        // TODO: not the 0. element of array, rather than the element that has the most metadata

                        return (
                            <MediaCard key={id} id={obj.id} obj={{ id, obj }} />
                        );
                    })}
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
                labelRowsPerPage="Media per page"
            />
        </div>
    );
};
