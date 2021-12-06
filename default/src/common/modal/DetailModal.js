import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setClose } from "slices/modalSlice";

import useStyles from "styles/customize/table/DetailTableStyles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import CloseButton from "common/button/DefaultButton";

function DetailModal() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { detailOpen, detailData } = useSelector(modalSelector);

    // 모달 닫기
    const onClose = () => dispatch(setClose());

    const QuantityTable = () => (
        <tbody>
            <tr>
                <th align="center" width={150} className={classes.label}>
                    판매량
                </th>
                <td align="center" width={350}>
                    {detailData?.quantity ? `${detailData.quantity.toLocaleString()}` : ""}
                </td>
            </tr>
        </tbody>
    );

    return (
        <>
            {detailOpen && (
                <Dialog open={detailOpen} onClose={onClose} sx={{ p: 10 }}>
                    <DialogTitle>{detailData && detailData.title}</DialogTitle>
                    <DialogContent>
                        <table className={classes.detailTable}>{detailData && detailData.type === "quantity" && <QuantityTable />}</table>
                    </DialogContent>
                    <DialogActions sx={{ py: 2, px: 2.5 }}>
                        <CloseButton size="small" text="닫기" onClick={onClose} />
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}

export default DetailModal;
