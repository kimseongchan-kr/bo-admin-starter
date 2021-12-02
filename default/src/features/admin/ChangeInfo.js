import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMenu from "hooks/useMenu";

import { setMessage } from "slices/modalSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import theme from "styles/theme/form";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Input from "common/form/Input";
import SubmitButton from "common/button/SubmitButton";
import MessageModal from "common/modal/MessageModal";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    image: yup
        .mixed()
        .required()
        .test("image", "이미지를 선택해주세요", (value) => {
            return value.length > 0;
        })
});

const useStyles = makeStyles(({ palette }) => ({
    form: {
        width: "100%",
        margin: "0 auto",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        background: palette.neutral["white"]
    },
    table: {
        borderRadius: 4,
        "& tr": {
            border: `1px solid ${palette.border["opacity0.1"]}`
        },
        "& th": {
            minWidth: 100,
            fontWeight: 600,
            textAlign: "left",
            color: palette.text["label"],
            background: palette.background["light"],
            borderRight: `1px solid ${palette.border["opacity0.1"]}`
        }
    }
}));

export default function ChangeInfo() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { errors, clearErrors, reset, control, register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    useMenu({ page: "Change Info", menu: null, menuTitle: "정보 변경", menuNum: null });

    useEffect(() => {
        clearErrors();
        // 회원정보 불러오기
        reset({
            name: "이름",
            email: "이메일",
            전화번호: "전화번호"
        });
    }, [clearErrors, reset]);

    // 데이터 수정하기
    const onSubmit = (data) => {
        console.log(data);
        dispatch(setMessage({ open: true, type: "message", message: "수정되었습니다." }));
    };

    return (
        <ThemeProvider theme={theme}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <table className={classes.table}>
                    <colgroup>
                        <col width="12%" />
                        <col width="88%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>
                                <Typography variant="body2">이름</Typography>
                            </th>
                            <td>
                                <Input name="name" defaultValue="이름" inputType="text" control={control} classes={classes} />
                                {errors.name && (
                                    <Typography component="p" variant="body2" className={classes.errorMessage}>
                                        이름을 입력해주세요.
                                    </Typography>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Typography variant="body2">이메일</Typography>
                            </th>
                            <td>
                                <Input name="email" defaultValue="이메일" inputType="text" control={control} classes={classes} />
                                {errors.email && (
                                    <Typography component="p" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                        이메일을 입력해주세요.
                                    </Typography>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Typography variant="body2">전화번호</Typography>
                            </th>
                            <td>
                                <Input name="phone" defaultValue="전화번호" inputType="phone" control={control} classes={classes} />
                                {errors.phone && (
                                    <Typography component="p" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                        전화번호를 입력해주세요.
                                    </Typography>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Typography variant="body2">이미지</Typography>
                            </th>
                            <td>
                                <input name="image" type="file" ref={register} />
                                {errors.image && (
                                    <Typography component="p" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                        이미지를 선택해주세요.
                                    </Typography>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Grid sx={{ py: 2.5 }} container direction="row" justifyContent="flex-end" alignItems="center">
                    <SubmitButton type="submit" text="변경" />
                </Grid>
            </form>
            <MessageModal />
        </ThemeProvider>
    );
}
