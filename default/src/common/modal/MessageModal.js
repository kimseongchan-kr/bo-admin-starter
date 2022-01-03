import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setClose } from "slices/modalSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import ModalButton from "common/button/DefaultButton";

function MessageModal({ handleConfirm }) {
    const dispatch = useDispatch();
    const { msgOpen, messageType, message } = useSelector(modalSelector);

    // type : confirm
    const onConfirm = () => {
        dispatch(setClose());
        handleConfirm();
    };

    // type : message
    const onClose = () => dispatch(setClose());

    return (
        msgOpen && (
            <Dialog open={msgOpen} onClose={onClose} sx={{ p: 10 }}>
                <DialogTitle>{messageType === "message" ? "알림" : "확인"}</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" style={{ minWidth: 320 }}>
                        {message}
                    </Typography>
                </DialogContent>
                {messageType === "message" ? (
                    <DialogActions sx={{ py: 2, px: 2.5 }}>
                        <ModalButton size="small" text="확인" onClick={onClose} />
                    </DialogActions>
                ) : (
                    <DialogActions sx={{ py: 2, px: 2.5 }}>
                        <ModalButton size="small" text="확인" onClick={onConfirm} />
                        <ModalButton size="small" color="error" text="취소" onClick={onClose} />
                    </DialogActions>
                )}
            </Dialog>
        )
    );
}

MessageModal.propTypes = {
    handleConfirm: PropTypes.func
};

MessageModal.defaultProps = {
    handleConfirm: () => {}
};

export default MessageModal;
