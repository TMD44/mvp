import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { ModalType } from '@app/components/Modals/ModalType';

interface PropsShape {
    handleModalOpen: (type: ModalType, message?: string) => void;
    sideBarIsOpen: boolean;
}

export function SourceImporterMenuItem({
    handleModalOpen,
    sideBarIsOpen,
}: PropsShape) {
    return (
        <Tooltip
            title="Source Importer"
            arrow
            placement="right"
            disableHoverListener={!!sideBarIsOpen}
        >
            <ListItem button onClick={() => handleModalOpen('SourceImport')}>
                <ListItemIcon>
                    <ImportExportIcon />
                </ListItemIcon>
                <ListItemText primary="Source Importer" />
            </ListItem>
        </Tooltip>
    );
}
