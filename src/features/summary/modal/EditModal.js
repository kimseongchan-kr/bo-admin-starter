import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summarySelector, setModal } from "slices/summarySlice";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Modal from "react-modal";
import Select from "react-select";
import customStyles from "styles/customize/FormSelectStyles";
import useStyles from "styles/customize/ModalFormStyles";

import { Typography, TextField, Grid, Checkbox, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import ModalCloseButton from "common/button/ModalCloseButton";
import ModalEditButton from "common/button/ModalEditButton";

import { disableScroll, ableScroll } from "utils/CommonFunction";
Modal.defaultStyles.overlay.zIndex = 9999;

const schema = yup.object().shape({
    dessert: yup.object().required(),
    calories: yup.number().min(0).integer().required(),
    fat: yup.string().required(),
    radio: yup.string().required(),
    image: yup
        .mixed()
        .required()
        .test("image", "이미지를 선택해주세요", (value) => {
            return value.length > 0;
        })
});

const options = [
    { value: "Cupcake", label: "Cupcake" },
    { value: "Cookie", label: "Cookie" },
    { value: "Snack", label: "Snack" }
];

export default function EditModal({ handleDataSubmit }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { open, modalData, modalStatus } = useSelector(summarySelector);
    const { errors, clearErrors, reset, control, register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [form, setForm] = useState({
        dessert: "",
        calories: 0,
        fat: "",
        radio: "1",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    });

    useEffect(() => {
        if (modalStatus === "modify") {
            clearErrors();
            reset({
                dessert: { value: modalData.dessert, label: modalData.dessert },
                calories: modalData.calories,
                fat: modalData.fat,
                radio: "1",
                checkbox1: true,
                checkbox2: false,
                checkbox3: false
            });
            setForm({
                dessert: modalData.dessert,
                calories: modalData.calories,
                fat: modalData.fat,
                radio: "1",
                checkbox1: true,
                checkbox2: false,
                checkbox3: false
            });
        } else if (modalStatus === "add") {
            clearErrors();
            reset({
                dessert: "",
                calories: 0,
                fat: "",
                radio: "1",
                checkbox1: false,
                checkbox2: false,
                checkbox3: false
            });
            setForm({
                dessert: options[0].value,
                calories: 0,
                fat: "",
                radio: "1",
                checkbox1: true,
                checkbox2: false,
                checkbox3: false
            });
        }
    }, [modalStatus, clearErrors, reset, modalData]);

    const onSubmit = (data) => {
        handleDataSubmit(data);
    };

    return (
        <Modal isOpen={open} onRequestClose={() => dispatch(setModal(false))} style={modalStyles} contentLabel="Add/Modify Summary" onAfterOpen={disableScroll} onAfterClose={ableScroll}>
            <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                Summary {modalStatus === "modify" ? "수정" : "추가"}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">디저트</Typography>
                            </td>
                            <td>
                                <Controller
                                    defaultValue={{ value: form.dessert, label: form.dessert }}
                                    name="dessert"
                                    control={control}
                                    render={({ onChange }) => (
                                        <Select
                                            styles={customStyles}
                                            name="dessert"
                                            defaultValue={{ value: form.dessert, label: form.dessert }}
                                            isClearable={false}
                                            isSearchable={false}
                                            options={options}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                <span style={{ color: "red" }}>{errors.dessert && "디저트를 선택해주세요."}</span>
                            </td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">지방</Typography>
                            </td>
                            <td>
                                <Controller
                                    name="fat"
                                    defaultValue={form.fat}
                                    control={control}
                                    render={({ onChange, value }) => (
                                        <TextField className={classes.textInput} id="exercise-name-textfield" label="" variant="outlined" name="fat" value={value} onChange={onChange} />
                                    )}
                                />
                                <span style={{ color: "red" }}>{errors.fat && "지방을 입력해주세요."}</span>
                            </td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">칼로리</Typography>
                            </td>
                            <td>
                                <Controller
                                    name="calories"
                                    defaultValue={form.calories}
                                    control={control}
                                    render={({ onChange, value }) => (
                                        <TextField
                                            id="outlined-number"
                                            label=""
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            variant="outlined"
                                            name="calories"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                <span style={{ color: "red" }}>{errors.calories && "칼로리를 입력해주세요."}</span>
                            </td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">radio example</Typography>
                            </td>
                            <td>
                                <Controller
                                    name="radio"
                                    defaultValue={form.radio}
                                    control={control}
                                    render={({ onChange, value }) => (
                                        <RadioGroup aria-label="radio" onChange={(e) => onChange(e.target.value)} value={value}>
                                            <FormControlLabel value="1" control={<Radio color="primary" />} label="1" />
                                            <FormControlLabel value="2" control={<Radio color="primary" />} label="2" />
                                            <FormControlLabel value="3" control={<Radio color="primary" />} label="3" />
                                        </RadioGroup>
                                    )}
                                />
                                <span style={{ color: "red" }}>{errors.radio && "radio를 선택해주세요."}</span>
                            </td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">checkbox example</Typography>
                            </td>
                            <td>
                                <Controller
                                    name="checkbox1"
                                    control={control}
                                    defaultValue={form.checkbox1}
                                    render={({ onChange, value }) => (
                                        <FormControlLabel control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} name="checkbox1" color="primary" />} label="1" />
                                    )}
                                />
                                <Controller
                                    name="checkbox2"
                                    control={control}
                                    defaultValue={form.checkbox2}
                                    render={({ onChange, value }) => (
                                        <FormControlLabel control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} name="checkbox2" color="primary" />} label="2" />
                                    )}
                                />
                                <Controller
                                    name="checkbox3"
                                    control={control}
                                    defaultValue={form.checkbox3}
                                    render={({ onChange, value }) => (
                                        <FormControlLabel control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} name="checkbox3" color="primary" />} label="3" />
                                    )}
                                />
                            </td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.label}>
                                <Typography variant="body2">이미지</Typography>
                            </td>
                            <td>
                                <input name="image" type="file" ref={register} />
                                <span style={{ color: "red" }}>{errors.image && "이미지를 선택해주세요."}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <ModalCloseButton />
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
