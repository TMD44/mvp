import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
}

export function SourceImporterMenuItem({ handleModalOpen }: PropsShape) {
    return (
        <>
            <ListItem button onClick={() => handleModalOpen('SourceImport')}>
                <ListItemIcon>
                    <ImportExportIcon />
                </ListItemIcon>
                <ListItemText primary="Source Importer" />
            </ListItem>
        </>
    );
}
