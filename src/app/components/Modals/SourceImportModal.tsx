import React from 'react';
import { Dialog, Backdrop } from '@material-ui/core';
import { SourceImporter } from '../SourceImport/SourceImporter';
import { ModalTitleBar } from './ModalTitleBar';
import { TransitionRight } from './ModalTransitions';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
}

export function SourceImportModal({
    handleModalClose,
    modalIsOpen,
}: PropsShape) {
    return (
        <Dialog
            aria-labelledby="Source Importer"
            aria-describedby="Import the media source files"
            // fullScreen
            fullWidth
            maxWidth="lg" // 'lg','md','sm','xl','xs'
            open={modalIsOpen}
            onClose={handleModalClose}
            TransitionComponent={TransitionRight}
            TransitionProps={{ timeout: 300 }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                className: 'modalBackdrop',
            }}
        >
            <ModalTitleBar
                title="Source Importer"
                handleModalClose={handleModalClose}
            />
            <div className="modalPaper">
                <SourceImporter />
            </div>
        </Dialog>
    );
}
