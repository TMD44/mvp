import React from 'react';
import { Dialog, Backdrop } from '@material-ui/core';
import { ModalTitleBar } from './ModalTitleBar';
import { TransitionRight } from './ModalTransitions';
import { Settings } from '../Settings/Settings';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
}

export function SettingsModal({ handleModalClose, modalIsOpen }: PropsShape) {
    return (
        <Dialog
            aria-labelledby="Settings"
            aria-describedby="Settings"
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
                title="Settings"
                handleModalClose={handleModalClose}
            />
            <div className="modalPaper">
                <Settings />
            </div>
        </Dialog>
    );
}
