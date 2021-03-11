import React from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function MessageCloseButton({ setModal }) {
    return (
        <IconButton onClick={() => setModal(false)}>
            <Close />
            닫기
        </IconButton>
    );
}
