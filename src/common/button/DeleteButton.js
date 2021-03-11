import React from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function DeleteButton({ handleSubmit }) {
    return (
        <IconButton onClick={handleSubmit}>
            <Close style={{ color: "#DE5D5D" }} />
            삭제
        </IconButton>
    );
}
