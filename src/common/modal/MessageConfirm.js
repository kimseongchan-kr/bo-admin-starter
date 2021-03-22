import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import theme from "styles/theme/button";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, IconButton, Typography, Grid } from "@material-ui/core";
import { CheckOutlined, Close } from "@material-ui/icons";

import Modal from "react-modal";
import { disableScroll, enableScroll } from "utils/CommonFunction";

Modal.defaultStyles.overlay.zIndex = 9999;

const useStyles = makeStyles(() => ({
    message: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "-0.26px"
    }
}));

// 삭제 확인 모달
function ConfirmModal({ onClose, handleDelete }) {
    const classes = useStyles();
    const { msgConfirmOpen, message } = useSelector(modalSelector);

    return (
        <Modal isOpen={msgConfirmOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Message Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Typography variant="body1" display="block" color="inherit" className={classes.message}>
                {message}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <ThemeProvider theme={theme}>
                        <IconButton onClick={onClose}>
                            <Close style={{ color: "#DE5D5D" }} />
                            취소
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <CheckOutlined />
                            확인
                        </IconButton>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Modal>
    );
}

const modalStyles = {
    content: {
        width: 360,
        padding: "30px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "80%"
    }
};

ConfirmModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default ConfirmModal;
