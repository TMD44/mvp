import React from 'react';
import { Snackbar } from '@material-ui/core';
import { TransitionUp } from './ModalTransitions';

interface PropsShape {
    handleModalClose: () => void;
    modalIsOpen: boolean;
    message: string;
}

export const MessageModal = ({
    handleModalClose,
    modalIsOpen,
    message,
}: PropsShape) => {
    return (
        <Snackbar
            open={modalIsOpen}
            onClose={handleModalClose}
            autoHideDuration={1000}
            TransitionComponent={TransitionUp}
            message={message}
        />
    );
};
