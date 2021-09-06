import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import useStyles from "styles/customize/table/DetailTableStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CloseButton from "common/button/DefaultButton";

import Modal from "react-modal";
import { disableScroll, enableScroll } from "utils/common";

Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

function DetailModal({ onClose }) {
    const classes = useStyles();
    const { detailOpen, detailData } = useSelector(modalSelector);

    const QuantityTable = () => (
        <tbody>
            <tr className={classes.row}>
                <th align="center" className={classes.tableHead}>
                    판매량
                </th>
                <td align="center" width={350} className={classes.content}>
                    {detailData && detailData.quantity ? `${detailData.quantity.toLocaleString()}` : ""}
                </td>
            </tr>
        </tbody>
    );

    return (
        <Modal isOpen={detailOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Detail Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Paper className={classes.detailPaper} elevation={0}>
                <Typography className={classes.mb20} variant="body1" component="h4" display="block">
                    {detailData && detailData.title}
                </Typography>
                <table className={classes.table}>{detailData && detailData.type === "quantity" && <QuantityTable />}</table>
            </Paper>
            <Grid container justify="flex-end" alignItems="center">
                <CloseButton icon="cancel" text="닫기" onClick={onClose} />
            </Grid>
        </Modal>
    );
}

const modalStyles = {
    content: {
        minWidth: 500,
        padding: 20,
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "80%"
    }
};

DetailModal.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default DetailModal;
