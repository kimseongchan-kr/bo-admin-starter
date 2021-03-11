import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "slices/summarySlice";

import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function ModalCloseButton() {
    const dispatch = useDispatch();

    return (
        <IconButton onClick={() => dispatch(setModal({ open: false }))}>
            <Close style={{ color: "#DE5D5D" }} />
            닫기
        </IconButton>
    );
}
