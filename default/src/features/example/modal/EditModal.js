import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useStyles from "styles/customize/ModalFormStyles";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Editor from "common/editor";

import Modal from "react-modal";
import ModalCloseButton from "common/button/CloseButton";
import ModalEditButton from "common/button/EditButton";
import { disableScroll, enableScroll } from "utils/CommonFunction";

Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

const schema = yup.object().shape({
    title: yup.object().required()
});

export default function EditModal({ contents, setContents, onClose, handleDataSubmit }) {
    const classes = useStyles();
    const { open, modalId, modalData, modalStatus } = useSelector(modalSelector);
    const { errors, clearErrors, reset, control, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [form, setForm] = useState({
        title: ""
    });

    useEffect(() => {
        clearErrors();
        setContents("");

        if (modalStatus === "modify") {
            reset({ title: "에디터 테스트" });
            setForm({ title: modalData.title });
        } else if (modalStatus === "add") {
            reset({ title: "" });
            setForm({ title: "" });
        }
    }, [modalStatus, clearErrors, reset, setContents, modalData]);

    const onSubmit = (data) => {
        handleDataSubmit(data, modalId);
    };

    return (
        <Modal isOpen={open} onRequestClose={onClose} style={modalStyles} contentLabel="Add/Modify Example" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                Example {modalStatus === "modify" ? "수정" : "추가"}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">제목</Typography>
                            </td>
                            <td>
                                <Controller
                                    name="title"
                                    defaultValue={form.title}
                                    control={control}
                                    render={({ onChange, value }) => (
                                        <TextField
                                            className={classes.textInput}
                                            id="outlined-title"
                                            label=""
                                            type="text"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            variant="outlined"
                                            name="title"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                <span style={{ color: "red" }}>{errors.calories && "제목을 입력해주세요."}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">에디터</Typography>
                            </td>
                        </tr>
                        <tr className={classes.editorRow}>
                            <td>
                                <Editor contents={contents} setContents={setContents} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <ModalCloseButton onClose={onClose} text="닫기" />
                    </Grid>
                    <Grid item>
                        <ModalEditButton text={modalStatus === "modify" ? "수정" : "추가"} />
                    </Grid>
                </Grid>
            </form>
        </Modal>
    );
}

const modalStyles = {
    content: {
        width: "80%",
        minWidth: 500,
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
