import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClose, setMessage } from "slices/modalSlice";
import MenuRedux from "common/menu/MenuRedux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import theme from "styles/theme/table";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import MessageModal from "common/modal/MessageModal";
import EditButton from "common/button/EditButton";
import Input from "common/form/Input";

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

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        margin: "0 auto",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    form: {
        width: "100%",
        paddingBottom: 30
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        borderTop: " 1px solid #3d35951a",
        borderBottom: " 1px solid #3d35951a",
        "& td": {
            paddingLeft: 20
        }
    },
    row: {
        borderBottom: " 1px solid #3d35951a"
    },
    label: {
        width: 160,
        height: 48,
        background: "#fbfbfb",
        textAlign: "left",
        lineHeight: "48px",
        color: "#333333b3"
    },
    textInput: {
        width: 320,
        height: 32
    },
    errorMessage: {
        lineHeight: "32px",
        color: "red",
        marginLeft: 10
    },
    paddingRight: {
        paddingRight: 16
    }
}));

export default function ChangeInfo() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { errors, clearErrors, reset, control, register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

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
        dispatch(setMessage({ open: true, message: "수정되었습니다." }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    return (
        <>
            <MenuRedux menu={null} title="정보 변경" num={0} />
            <div className={classes.container}>
                <ThemeProvider theme={theme}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">이름</Typography>
                                    </td>
                                    <td>
                                        <Input name="name" defaultValue="이름" control={control} inputType="text" classes={classes} />
                                        <Typography component="span" variant="body2" className={classes.errorMessage}>
                                            {errors.name && "이름을 입력해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">이메일</Typography>
                                    </td>
                                    <td>
                                        <Input name="email" defaultValue="이메일" control={control} inputType="text" classes={classes} />
                                        <Typography component="span" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                            {errors.email && "이메일을 입력해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">전화번호</Typography>
                                    </td>
                                    <td>
                                        <Input name="phone" defaultValue="전화번호" control={control} inputType="phone" classes={classes} />
                                        <Typography component="span" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                            {errors.phone && "전화번호를 입력해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <td className={classes.label}>
                                        <Typography variant="body2">이미지</Typography>
                                    </td>
                                    <td>
                                        <input name="image" type="file" ref={register} />
                                        <Typography component="span" variant="body2" style={{ color: "red", marginLeft: 10 }}>
                                            {errors.image && "이미지를 선택해주세요."}
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            <Grid item className={classes.paddingRight}>
                                <EditButton text="변경" />
                            </Grid>
                        </Grid>
                    </form>
                </ThemeProvider>
                <MessageModal onClose={onClose} />
            </div>
        </>
    );
}
