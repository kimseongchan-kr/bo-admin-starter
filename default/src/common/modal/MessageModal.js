import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import useStyles from "styles/customize/components/ModalStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "common/button/DefaultButton";

import Modal from "react-modal";
import { disableScroll, enableScroll } from "utils/common";

Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

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
                    <Button icon="cancel" onClick={onClose} text="닫기" />
                </Grid>
            </Grid>
        </Modal>
    );
}

const modalStyles = {
    content: {
        minWidth: 360,
        padding: 30,
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
