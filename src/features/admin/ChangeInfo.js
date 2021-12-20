import React, { useEffect } from "react";
import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useStyles from "styles/customize/table/DetailTableStyles";
import theme from "styles/theme/form";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Input from "common/form/Input";
import ErrorMessage from "common/form/ErrorMessage";
import SubmitButton from "common/button/SubmitButton";
import MessageModal from "common/modal/MessageModal";

import { schema } from "components/Data";

export default function ChangeInfo() {
    const classes = useStyles();
    const menu = useMenu({ page: "ChangeInfo", menu: null, menuTitle: "정보 수정", menuNum: null });

    const { errors, clearErrors, reset, control, register, handleSubmit } = useForm({
        resolver: yupResolver(schema[menu])
    });

    const handleMessage = useMessage();

    useEffect(() => {
        clearErrors();
        reset({
            name: "이름",
            email: "이메일",
            전화번호: "전화번호"
        });
    }, [clearErrors, reset]);

    // 데이터 수정하기
    const onSubmit = (data) => {
        console.log("data", data);
        handleMessage({ type: "message", message: "수정되었습니다." });
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
                            <th>이름</th>
                            <td>
                                <Input name="name" defaultValue="이름" inputType="text" control={control} classes={classes} />
                                {errors.name && <ErrorMessage text="이름을 입력해주세요." />}
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <Input name="email" defaultValue="이메일" inputType="text" control={control} classes={classes} />
                                {errors.email && <ErrorMessage text="이메일을 입력해주세요." />}
                            </td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>
                                <Input name="phone" defaultValue="전화번호" inputType="phone" control={control} classes={classes} />
                                {errors.phone && <ErrorMessage text="전화번호를 입력해주세요." />}
                            </td>
                        </tr>
                        <tr>
                            <th>이미지</th>
                            <td>
                                <input name="image" type="file" ref={register} />
                                {errors.image && <ErrorMessage text="이미지를 선택해주세요." />}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Grid sx={{ px: 2.5 }} container justifyContent="flex-end" alignItems="center">
                    <SubmitButton type="submit" text="정보 수정하기" />
                </Grid>
            </form>
            <MessageModal />
        </ThemeProvider>
    );
}
