import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setEdit, setEditClose } from "slices/modalSlice";

import useStyles from "styles/customize/components/ModalFormStyles";
import theme from "styles/theme/form";
import { ThemeProvider } from "@mui/material/styles";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

import SingleTextField from "common/table/SingleTextField";
import Select from "common/table/SingleSelect";
import RadioButton from "common/table/RadioButton";
import CheckBox from "common/table/CheckBox";
import Editor from "common/editor";
import ModalButton from "common/button/DefaultButton";
import SubmitButton from "common/button/SubmitButton";

const options = [
    { value: "", label: "디저트를 선택해주세요" },
    { value: "Cupcake", label: "Cupcake" },
    { value: "Cookie", label: "Cookie" },
    { value: "Snack", label: "Snack" }
];

export default function ExampleUploadModal({ loading, handleDataSubmit }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { editOpen, data } = useSelector(modalSelector);

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
        if (data) {
            setCategory(data.category);
            setNewData({
                name: data.name,
                calories: data.calories,
                useYn: data.useYn
            });
            setIngredients({
                ingredients1: true,
                ingredients2: true,
                ingredients3: false
            });
            setContents(data.contents);
        }
    }, [data]);

    const handleChange = (e) => setNewData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleSelect = (e) => setCategory(e);

    const handleIngredients = (e) => setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

    const handleBeforeSubmit = async () => {
        await dispatch(setEdit({ open: true, data: { ...data, contents, category, ...newData } }));
        await handleDataSubmit();
    };

    const onClose = () => {
        setCategory({ value: "", label: "카테고리를 선택해주세요" });
        setNewData({ name: "", calories: 0, useYn: "Y" });
        setIngredients({ ingredients1: false, ingredients2: false, ingredients3: false });
        setContents("");

        dispatch(setEditClose());
    };

    return (
        <>
            {editOpen && (
                <Dialog open={editOpen} onClose={onClose} sx={{ p: 10 }} classes={{ paper: classes.container }}>
                    <ThemeProvider theme={theme}>
                        <DialogTitle className={classes.title}>Summary {data && data.modalStatus === "modify" ? "수정" : "추가"}</DialogTitle>
                        <DialogContent>
                            <table className={classes.table}>
                                <colgroup>
                                    <col width="20%"></col>
                                    <col width="80%"></col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>디저트명</th>
                                        <td>
                                            <SingleTextField inputType="text" name="name" value={newData.name} handleChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>카테고리</th>
                                        <td className={classes.selectContent}>
                                            <Select name="category" value={category} options={options} handleSelect={handleSelect} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>칼로리</th>
                                        <td>
                                            <SingleTextField inputType="number" name="calories" value={newData.calories} handleChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>판매여부</th>
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
                                    <tr>
                                        <th>재료</th>
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
                                    <tr>
                                        <th>디저트 설명</th>
                                    </tr>
                                    <tr className={classes.editorRow}>
                                        <td>
                                            <Editor contents={contents} setContents={setContents} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </DialogContent>
                        <DialogActions sx={{ py: 2, px: 2.5 }}>
                            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <ModalButton icon="cancel" onClick={onClose} text="닫기" />
                                </Grid>
                                <Grid item>
                                    <SubmitButton type="button" text="제출" loading={loading} onClick={handleBeforeSubmit} />
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </ThemeProvider>
                </Dialog>
            )}
        </>
    );
}
