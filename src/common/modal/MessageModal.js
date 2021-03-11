import React from "react";

import Modal from "react-modal";
import buttonTheme from "styles/theme/buttonTheme";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, ThemeProvider } from "@material-ui/core";
import MessageCloseButton from "common/button/MessageCloseButton";
import { disableScroll, ableScroll } from "utils/CommonFunction";

Modal.defaultStyles.overlay.zIndex = 9999;

const useStyles = makeStyles((theme) => ({
    message: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "-0.26px"
    }
}));

export default function MessageModal({ open, setModal, message }) {
    const classes = useStyles();

    return (
        <Modal isOpen={open} onRequestClose={() => setModal(false)} style={modalStyles} contentLabel="Message Modal" onAfterOpen={disableScroll} onAfterClose={ableScroll}>
            <Typography variant="body1" display="block" color="inherit" className={classes.message}>
                {message}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <ThemeProvider theme={buttonTheme}>
                        <MessageCloseButton setModal={setModal} />
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
