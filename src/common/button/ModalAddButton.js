import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "slices/modalSlice";

import { ThemeProvider, IconButton } from "@material-ui/core";
import theme from "styles/theme/button";
import { CheckOutlined } from "@material-ui/icons";

export default function AddButton() {
    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={async () => await dispatch(setModal({ open: true, modalId: "", modalStatus: "add" }))}>
                <CheckOutlined style={{ color: "#039BE5" }} />
                추가
            </IconButton>
        </ThemeProvider>
    );
}
