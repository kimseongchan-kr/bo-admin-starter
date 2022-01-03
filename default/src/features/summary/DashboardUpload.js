import React, { useEffect, useState, useCallback } from "react";
import { useMutation } from "react-query";
import { postData } from "api";

import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";
import usePageMove from "hooks/usePageMove";

import { getMessageText } from "utils/common";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useStyles from "styles/customize/table/DetailTableStyles";
import theme from "styles/theme/form";
import { ThemeProvider } from "@mui/material/styles";

import Header from "layout/page/Header";
import Buttons from "layout/page/Buttons";
import UploadImage from "components/image/UploadImage";
import UploadForm from "features/summary/components/UploadForm";
import MessageModal from "common/modal/MessageModal";

import { schema } from "components/Data";

export default function DashboardUpload() {
    const classes = useStyles();
    const menu = useMenu({ page: "Dashboard", menu: "summary", menuTitle: "Dashboard", menuNum: 0 }); // 메뉴 설정하기

    const { errors, clearErrors, control, reset, getValues, handleSubmit } = useForm({
        resolver: yupResolver(schema[menu])
    });

    const [imageFiles, setImageFiles] = useState([]);
    const [actionType, setActionType] = useState("submit"); // 모달 타입

    const handleMessage = useMessage(); // 메시지 / 확인 모달 열기
    const handlePageClick = usePageMove({ baseUrl: "/" }); // 페이지 이동하기

    // 입력한 정보 초기화
    const handleReset = useCallback(() => {
        clearErrors();
        setImageFiles([]);
        reset({
            category: { value: "", label: "카테고리를 선택해주세요" },
            name: "",
            quantity: 0,
            ingredients_1: false,
            ingredients_2: false,
            ingredients_3: false,
            ingredients_4: false,
            viewYn: "Y"
        });
    }, [clearErrors, reset]);

    // react-hook-form 데이터 초기화
    useEffect(() => {
        handleReset();
    }, [handleReset]);

    // 이미지 파일 삭제
    const handleDeleteImageFile = (imageIndex) => setImageFiles(imageFiles.filter((_, index) => index !== imageIndex));

    // 등록 API
    const { isLoading, mutate: createMutation } = useMutation(({ url, fileYn, formData }) => postData(url, formData, fileYn), {
        onSuccess: (data) => {
            handleMessage({ type: "message", message: data?.message });
            handlePageClick();
        },
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 등록하기 / 수정하기
    const handleDataSubmit = () => {
        const data = getValues();

        const formData = new FormData();
        formData.append("category", data.category.value);
        formData.append("name", data.name);

        imageFiles?.forEach((imageFile) => {
            if (imageFile.file) {
                formData.append("images", imageFile.file);
            }
        });

        createMutation({ url: "/web/post/example", fileYn: true, formData });
    };

    // 확인 모달 띄우기
    const onConfirm = (type) => {
        setActionType(type);
        handleMessage({ type: "confirm", message: getMessageText(type) });
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit(() => onConfirm("submit"))} noValidate autoComplete="off">
                <Header text="디저트 등록하기" onPageClick={handlePageClick} />
                <div className={classes.contentContainer}>
                    <UploadImage text="디저트 사진 등록" imageFiles={imageFiles} setImageFiles={setImageFiles} onConfirm={onConfirm} handleDeleteImageFile={handleDeleteImageFile} />
                    <UploadForm control={control} errors={errors} />
                </div>
                <Buttons type="upload" loading={isLoading} onPageClick={() => handlePageClick("list")} onConfirm={onConfirm} />
            </form>
            <MessageModal handleConfirm={actionType === "uploadCancel" ? () => handlePageClick("list") : actionType === "reset" ? handleReset : handleDataSubmit} />
        </ThemeProvider>
    );
}
