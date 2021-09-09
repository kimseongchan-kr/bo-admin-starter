import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setEdit } from "slices/modalSlice";

import { disableScroll, enableScroll } from "utils/common";

import theme from "styles/theme/form";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import useStyles from "styles/customize/components/ModalFormStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SingleTextField from "common/table/SingleTextField";
import Select from "common/table/SingleSelect";
import RadioButton from "common/table/RadioButton";
import CheckBox from "common/table/CheckBox";
import Editor from "common/editor";
import ModalButton from "common/button/DefaultButton";
import SubmitButton from "common/button/SubmitButton";

import Modal from "react-modal";
Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

const options = [
    { value: "", label: "디저트를 선택해주세요" },
    { value: "Cupcake", label: "Cupcake" },
    { value: "Cookie", label: "Cookie" },
    { value: "Snack", label: "Snack" }
];

export default function ExampleUploadModal({ loading, reset, handleDataSubmit, onClose }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { editOpen, editData } = useSelector(modalSelector);

    const [category, setCategory] = useState({ value: "", label: "카테고리를 선택해주세요" });
    const [newData, setNewData] = useState({
        name: "",
        calories: 0,
        useYn: "Y"
    });
    const [ingredients, setIngredients] = useState({
        ingredients1: false,
        ingredients2: false,
        ingredients3: false
    });
    const [contents, setContents] = useState("");

    useEffect(() => {
        // 데이터 초기화
        if (reset) {
            setCategory({ value: "", label: "카테고리를 선택해주세요" });
            setNewData({
                name: "",
                calories: 0,
                useYn: "Y"
            });
            setIngredients({
                ingredients1: false,
                ingredients2: false,
                ingredients3: false
            });
            setContents("");
        }

        if (editData) {
            setCategory(editData.category);
            setNewData({
                name: editData.name,
                calories: editData.calories,
                useYn: editData.useYn
            });
            setIngredients({
                ingredients1: true,
                ingredients2: true,
                ingredients3: false
            });
            setContents(editData.contents);
        }
    }, [editData, reset]);

    const handleChange = (e) => setNewData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleSelect = (e) => setCategory(e);

    const handleIngredients = (e) => setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

    const handleBeforeSubmit = async () => {
        await dispatch(setEdit({ open: true, data: { ...editData, contents, category, ...newData } }));
        await handleDataSubmit();
    };

    return (
        <Modal isOpen={editOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Upload Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            {editOpen && (
                <ThemeProvider theme={theme}>
                    <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                        Summary {editData && editData.modalStatus === "modify" ? "수정" : "추가"}
                    </Typography>
                    <table className={classes.table}>
                        <tbody>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">디저트명</Typography>
                                </td>
                                <td>
                                    <SingleTextField inputType="text" name="name" value={newData.name} handleChange={handleChange} />
                                </td>
                            </tr>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">카테고리</Typography>
                                </td>
                                <td className={classes.selectContent}>
                                    <Select name="category" value={category} options={options} handleSelect={handleSelect} />
                                </td>
                            </tr>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">칼로리</Typography>
                                </td>
                                <td>
                                    <SingleTextField inputType="number" name="calories" value={newData.calories} handleChange={handleChange} />
                                </td>
                            </tr>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">판매여부</Typography>
                                </td>
                                <td>
                                    <RadioButton
                                        name="useYn"
                                        value={newData.useYn}
                                        options={[
                                            { value: "Y", label: "판매" },
                                            { value: "N", label: "미판매" }
                                        ]}
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">재료</Typography>
                                </td>
                                <td>
                                    <CheckBox
                                        options={[
                                            { name: "ingredients1", value: ingredients.ingredients1, label: "Chocolate" },
                                            { name: "ingredients2", value: ingredients.ingredients2, label: "Strawberry" },
                                            { name: "ingredients3", value: ingredients.ingredients3, label: "Cheese" }
                                        ]}
                                        handleChange={handleIngredients}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={classes.table}>
                        <tbody>
                            <tr className={classes.row}>
                                <td className={classes.label}>
                                    <Typography variant="body2">디저트 설명</Typography>
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
                            <ModalButton icon="cancel" onClick={onClose} text="닫기" />
                        </Grid>
                        <Grid item>
                            <SubmitButton type="button" text="제출" loading={loading} onClick={handleBeforeSubmit} />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
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
