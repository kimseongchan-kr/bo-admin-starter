import React from "react";
import { IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

export default function ModalEditButton({ text }) {
    return (
        <IconButton type="submit">
            <CheckOutlined style={{ color: "#039BE5" }} />
            {text}
        </IconButton>
    );
}
