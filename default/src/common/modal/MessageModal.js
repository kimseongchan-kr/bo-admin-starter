import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CloseButton from "common/button/CloseButton";

import Modal from "react-modal";
import { disableScroll, enableScroll } from "utils/CommonFunction";

Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

const useStyles = makeStyles(() => ({
    message: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "-0.26px"
    }
}));
function MessageModal({ onClose }) {
    const classes = useStyles();
    const { msgOpen, message } = useSelector(modalSelector);

    return (
        <Modal isOpen={msgOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Message Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Typography variant="body1" display="block" color="inherit" className={classes.message}>
                {message}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <CloseButton onClose={onClose} text="닫기" />
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

MessageModal.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default MessageModal;
