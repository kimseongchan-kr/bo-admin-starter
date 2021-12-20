import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { useMutation } from "react-query";
import { putData, deleteData } from "api";

import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";
import usePageMove from "hooks/usePageMove";
import useGetById from "hooks/useGetById";

import { getMessageText } from "utils/common";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useStyles from "styles/customize/table/DetailTableStyles";
import theme from "styles/theme/form";
import { ThemeProvider } from "@mui/material/styles";

import Header from "layout/page/Header";
import Heading from "layout/page/Heading";
import Buttons from "layout/page/Buttons";
import UploadImage from "components/image/UploadImage";

import Input from "common/form/Input";
import FormSelect from "common/form/Select";
import CheckBox from "common/form/CheckBox";
import RadioButton from "common/form/RadioButton";
import ErrorMessage from "common/form/ErrorMessage";

import MessageModal from "common/modal/MessageModal";

import { sampleData, schema, tableSelectOptions } from "components/Data";

export default function DashboardUpload() {
    const classes = useStyles();
    const { idx } = useParams();
    const menu = useMenu({ page: "Dashboard", menu: "dashboard", menuTitle: "Dashboard", menuNum: 0 }); // 페이지 / 메뉴 설정하기

    const { errors, clearErrors, control, reset, getValues, handleSubmit } = useForm({
        resolver: yupResolver(schema[menu])
    });

    const [imageFiles, setImageFiles] = useState([]);
    const [deleteImage, setDeleteImage] = useState({});
    const [actionType, setActionType] = useState("submit"); // 모달 타입

    const handleMessage = useMessage(); // 메시지 / 확인 모달 열기
    const handlePageClick = usePageMove({ baseUrl: "/" }); // 페이지 이동하기

    const { isSuccess, data: detailData } = useGetById({ menu, url: `/web/example/detail/${idx}` });
    // -----SAMPLE-----
    const { data = sampleData, images = [] } = detailData || {};
    // -----SAMPLE-----

    // 입력한 정보 초기화
    const handleReset = useCallback(() => {
        clearErrors();
        setImageFiles([]);
        setDeleteImage({});
        reset({
            category: { value: data?.category, label: data?.category },
            name: data?.name,
            quantity: data?.quantity,
            description: data?.description,
            ingredients_1: data?.ingredients.includes("chocolate"),
            ingredients_2: data?.ingredients.includes("strawberry"),
            ingredients_3: data?.ingredients.includes("cheese"),
            ingredients_4: data?.ingredients.includes("others"),
            useYn: data?.useYn
        });

        images?.forEach((image) => {
            setImageFiles((prevState) => [
                ...prevState,
                {
                    idx: image.idx,
                    file: null,
                    preview: image.src
                }
            ]);
        });
    }, [data, images, clearErrors, reset]);

    // react-hook-form 데이터 초기화
    useEffect(() => {
        if (isSuccess) {
            handleReset();
        }
    }, [isSuccess, handleReset]);

    // imageFiles에서 이미지 삭제
    const handleDeleteImageFile = (imageIndex) => setImageFiles(imageFiles.filter((_, index) => index !== imageIndex));

    // 삭제 API
    const { mutation: deleteMutation } = useMutation(({ url, data }) => deleteData(url, data), {
        onSuccess: () => handleDeleteImageFile(deleteImage.index),
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 수정하기 -- 이미지 삭제
    const handleRemoveImage = () => deleteMutation({ url: "/delete/example", data: { imageIndex: deleteImage.imageIndex } });

    // 수정 API
    const { isLoading, mutate: updateMutation } = useMutation(({ url, fileYn, formData }) => putData(url, fileYn, formData), {
        onSuccess: (data) => {
            handleMessage({ type: "message", message: data?.message });
            handlePageClick();
        },
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 수정하기
    const handleDataSubmit = () => {
        const data = getValues();

        let formData = new FormData();
        formData.append("idx", idx);
        formData.append("category", data.category.value);
        formData.append("name", data.name);

        for (let key in imageFiles) {
            if (imageFiles[key].file) {
                formData.append("images", imageFiles[key].file);
            }
        }
        updateMutation({ url: "/web/put/example", fileYn: true, formData });
    };

    // 확인 모달 띄우기
    const onConfirm = (type, data) => {
        if (type === "delete") setDeleteImage(data);

        setActionType(type);
        handleMessage({ type: "confirm", message: getMessageText(type) });
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit(() => onConfirm("editSubmit"))} noValidate={false} autoComplete="off">
                <Header text="디저트 수정하기" onPageClick={handlePageClick} />
                <div className={classes.contentContainer}>
                    <UploadImage text="디저트 사진 수정" imageFiles={imageFiles} setImageFiles={setImageFiles} onConfirm={onConfirm} handleDeleteImageFile={handleDeleteImageFile} />
                    <div className={classes.tableContainer}>
                        <Heading type="default" text="디저트 정보 입력" />
                        <table className={classes.table}>
                            <colgroup>
                                <col width="20%"></col>
                                <col width="80%"></col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>카테고리</th>
                                    <td>
                                        <FormSelect
                                            name="category"
                                            defaultValue={{ value: data?.category || "", label: data?.category || "카테고리를 선택해주세요" }}
                                            control={control}
                                            options={[
                                                { value: "", label: "카테고리를 선택해주세요" },
                                                { value: "Cupcake", label: "Cupcake" },
                                                { value: "Cookie", label: "Cookie" }
                                            ]}
                                        />
                                        {errors.category && <ErrorMessage text="카테고리를 선택해주세요." />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>디저트명</th>
                                    <td>
                                        <Input inputType="text" name="name" defaultValue={data?.name || ""} fullWidth={true} control={control} />
                                        {errors.name && <ErrorMessage text="디저트명을 입력해주세요." />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>수량</th>
                                    <td>
                                        <Input inputType="number" name="quantity" defaultValue={data?.quantity || ""} control={control} />
                                        {errors.quantity && <ErrorMessage text="수량을 입력해주세요." />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>디저트 소개</th>
                                    <td>
                                        <Input inputType="text" name="description" defaultValue={data?.description || ""} multiline={true} rows={10} control={control} />
                                        {errors.description && <ErrorMessage text="디저트 소개를 입력해주세요." />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>재료 선택</th>
                                    <td>
                                        <CheckBox
                                            options={[
                                                { defaultValue: data?.ingredients.includes("chocolate"), name: "ingredients_1", label: "chocolate" },
                                                { defaultValue: data?.ingredients.includes("strawberry"), name: "ingredients_2", label: "strawberry" },
                                                { defaultValue: data?.ingredients.includes("cheese"), name: "ingredients_3", label: "cheese" },
                                                { defaultValue: data?.ingredients.includes("others"), name: "ingredients_4", label: "others" }
                                            ]}
                                            control={control}
                                        />
                                        {errors.ingredients && <ErrorMessage text="재료를 선택해주세요." />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>판매 여부</th>
                                    <td>
                                        <RadioButton name="useYn" defaultValue={data?.useYn || "Y"} control={control} options={tableSelectOptions["useYn"]} />
                                        {errors.useYn && <ErrorMessage text="판매 여부를 선택해주세요." />}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Buttons type="upload" loading={isLoading} onPageClick={() => handlePageClick("list")} onConfirm={onConfirm} />
            </form>
            <MessageModal
                handleConfirm={actionType === "delete" ? handleRemoveImage : actionType === "editCancel" ? () => handlePageClick("list") : actionType === "reset" ? handleReset : handleDataSubmit}
            />
        </ThemeProvider>
    );
}
