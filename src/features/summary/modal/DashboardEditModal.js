import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useStyles from "styles/customize/ModalFormStyles";
import { Grid, Typography } from "@material-ui/core";

import FormSelect from "common/form/Select";
import Input from "common/form/Input";
import RadioButton from "common/form/RadioButton";
import CheckBox from "common/form/Checkbox";

import Modal from "react-modal";
import ModalCloseButton from "common/button/CloseButton";
import ModalEditButton from "common/button/EditButton";
import { disableScroll, enableScroll } from "utils/CommonFunction";

Modal.defaultStyles.overlay.zIndex = 9999;

const schema = yup.object().shape({
    dessert: yup.object().required(),
    calories: yup.number().min(0).integer().required(),
    fat: yup.string().required(),
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

export default function DashboardEditModal({ onClose, handleDataSubmit }) {
    const classes = useStyles();
    const { open, modalId, modalData, modalStatus } = useSelector(modalSelector);
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
                dessert: options[0],
                calories: 0,
                fat: "",
                radio: "1",
                checkbox1: true,
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
        handleDataSubmit(data, modalId);
    };

    return (
        <Modal isOpen={open} onRequestClose={onClose} style={modalStyles} contentLabel="Add/Modify Dashboard" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            {open && (
                <>
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
                                        <FormSelect name="dessert" defaultValue={{ value: form.dessert, label: form.dessert }} control={control} options={options} />
                                        <Typography component="span" variant="body2" className={classes.errorMessage}>
                                            {errors.dessert && "디저트를 선택해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">지방</Typography>
                                    </td>
                                    <td>
                                        <Input inputType="text" name="fat" defaultValue={form.fat} control={control} classes={classes} />
                                        <Typography component="span" variant="body2" className={classes.errorMessage}>
                                            {errors.fat && "지방을 입력해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">칼로리</Typography>
                                    </td>
                                    <td>
                                        <Input inputType="number" name="calories" defaultValue={form.calories} control={control} classes={classes} />
                                        <Typography component="span" variant="body2" className={classes.errorMessage}>
                                            {errors.calories && "칼로리를 입력해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">radio example</Typography>
                                    </td>
                                    <td>
                                        <RadioButton
                                            name="radio"
                                            defaultValue={form.radio}
                                            control={control}
                                            options={[
                                                { value: "1", label: "1" },
                                                { value: "2", label: "2" },
                                                { value: "3", label: "3" }
                                            ]}
                                        />
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">checkbox example</Typography>
                                    </td>
                                    <td>
                                        <CheckBox
                                            options={[
                                                { name: "checkbox1", defaultValue: form.checkbox1, label: "1" },
                                                { name: "checkbox2", defaultValue: form.checkbox2, label: "2" },
                                                { name: "checkbox3", defaultValue: form.checkbox3, label: "3" }
                                            ]}
                                            control={control}
                                        />
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">이미지</Typography>
                                    </td>
                                    <td>
                                        <input name="image" type="file" ref={register} />
                                        <Typography component="span" variant="body2" className={classes.errorMessage}>
                                            {errors.image && "이미지를 선택해주세요."}
                                        </Typography>
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
                </>
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
