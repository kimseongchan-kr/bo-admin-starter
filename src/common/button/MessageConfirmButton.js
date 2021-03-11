import React from "react";
import buttonsStyles from "styles/customize/ButtonStyles";
import { IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

export default function ModalConfirmButton({ handleSubmit }) {
    const buttonClasses = buttonsStyles();

    return (
        <IconButton className={buttonClasses.button} onClick={handleSubmit}>
            <CheckOutlined />
            확인
        </IconButton>
    );
}
