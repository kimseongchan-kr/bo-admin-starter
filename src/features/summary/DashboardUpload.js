import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import useMenu from "hooks/useMenu";
import useErrorMsg from "hooks/useErrorMsg";

import { summarySelector, getSummaryInfo, createSummaryInfo, updateSummaryInfo, deleteSummaryInfo, resetStates, clearError } from "slices/summarySlice";
import { setMessage, setMsgConfirm, setClose, setMsgConfirmClose } from "slices/modalSlice";

import { isEmpty } from "utils/common";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useStyles from "styles/customize/table/DetailTableStyles";
import formStyles from "styles/customize/components/FormStyles";
import formTheme from "styles/theme/form";
import { ThemeProvider } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

import Input from "common/form/Input";
import FormSelect from "common/form/Select";
import CheckBox from "common/form/CheckBox";
import RadioButton from "common/form/RadioButton";

import ListButton from "common/button/PageButton";
import SubmitButton from "common/button/SubmitButton";
import MessageModal from "common/modal/MessageModal";
import ConfirmModal from "common/modal/ConfirmModal";

import { sampleData, tableSelectOptions } from "components/Data";

const schema = yup.object().shape({
    category: yup.object().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    calories: yup.number().min(0).positive().required(),
    fat: yup.number().min(0).positive().required(),
    carbs: yup.number().min(0).positive().required(),
    protein: yup.number().min(0).positive().required(),
    quantity: yup.number().min(0).positive().required(),
    color: yup.string().required(),
    useYn: yup.string().required(),
    viewYn: yup.string().required()
});

export default function DashboardUpload() {
    const classes = useStyles();
    const formClasses = formStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { idx } = useParams();

    const { errors, clearErrors, control, register, setError, reset, getValues, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const { data, images, status, statusCode, errorMsg } = useSelector(summarySelector);
    const sampleDessert = idx ? sampleData : null;

    const [imageIndex, setImageIndex] = useState(0);
    const [imageFiles, setImageFiles] = useState([]);
    const [deleteImage, setDeleteImage] = useState({});

    const [imageLoading, setImageLoading] = useState(false); // 이미지 업로드 로딩 상태
    const [submitLoading, setSubmitLoading] = useState(false); // 등록 / 수정 로딩 상태
    const [actionType, setActionType] = useState("submit"); // 모달 타입

    // 메뉴 설정하기
    useMenu({ page: "Dashboard Upload", menu: "summary", title: "Dashboard", num: 1 });

    // 데이터 불러오기
    const handleData = useCallback(async () => {
        if (idx) {
            // await dispatch(getSummaryInfo(`/web/example?idx=${idx}`));
        }
    }, [dispatch, idx]);

    useEffect(() => {
        handleData();
    }, [handleData]);

    // 등록하기 -- 데이터 초기화
    useEffect(() => {
        if (!idx) {
            reset({
                category: { value: "", label: "카테고리를 선택해주세요" },
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
                quantity: 0,
                useYn: "Y",
                viewYn: "Y"
            });
        }
    }, [idx, reset]);

    // 수정할 데이터 보여주기
    useEffect(() => {
        // sampleData -> data로 교체
        if (idx && sampleData) {
            reset({
                category: { value: sampleData.category, label: sampleData.category },
                name: sampleData.name,
                calories: sampleData.calories,
                fat: sampleData.fat,
                carbs: sampleData.carbs,
                protein: sampleData.protein,
                quantity: sampleData.quantity,
                color: sampleData.color,
                ingredients_1: true,
                ingredients_2: true,
                ingredients_3: true,
                ingredients_4: false,
                useYn: sampleData.useYn,
                viewYn: sampleData.viewYn
            });
        }
    }, [idx, reset]);

    // 수정할 이미지 값 처리하기
    useEffect(() => {
        if (imageFiles.length === 0 && images.length > 0) {
            for (let i in images) {
                if (images[i]) {
                    setImageFiles((prevState) => [
                        ...prevState,
                        {
                            file: null,
                            preview: images[i].src
                        }
                    ]);
                }
            }
        }
    }, [images, imageFiles]);

    // 에러 메시지 노출하기
    useErrorMsg(status, statusCode, errorMsg);

    // 이미지 파일 업로드 (다중)
    const handleImageFile = async (e) => {
        setImageLoading(true);

        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                // 이미지 preview 만들기
                let reader = new FileReader();
                reader.onloadend = () => {
                    setImageFiles((prevState) => [
                        ...prevState,
                        {
                            file: files[i],
                            preview: reader.result
                        }
                    ]);
                };
                reader.readAsDataURL(files[i]);
            }
        }
        setImageLoading(false);
    };

    // 등록하기 -- 이미지 삭제
    const handleDeleteImage = (imageIndex) => {
        const filtered = imageFiles.filter((_, index) => index !== imageIndex);
        setImageIndex(0);
        setImageFiles(filtered);
    };

    // 수정하기 -- 이미지 삭제
    const handleRemoveImage = async () => {
        dispatch(setMsgConfirmClose());
        const { imageIndex } = deleteImage;

        // 이미지 삭제 API 예제
        // const resultAction = await dispatch(deleteSummaryInfo({ url: "/web/example", data: { imageIndex } }));
        // if (deleteSummaryInfo.fulfilled.match(resultAction)) {
        //     // 삭제 성공
        // } else {
        //     if (resultAction.payload) {
        //         dispatch(setMessage({ open: true, message: resultAction.payload.message }));
        //     } else {
        //         dispatch(setMessage({ open: true, message: "네트워크 에러" }));
        //     }
        // }
    };

    // Form Data 생성하기
    const handleFormData = () => {
        const data = getValues();

        let error = false;
        if (isEmpty(data.category.value)) {
            setError("category", { type: "manual", message: "카테고리를 선택해주세요" });
            error = true;
        }

        if (idx) {
            if (isEmpty(images) && isEmpty(imageFiles)) {
                return dispatch(setMessage({ open: true, message: "하나 이상의 상품이미지를 선택해주세요" }));
            }
        } else {
            if (isEmpty(imageFiles)) {
                return dispatch(setMessage({ open: true, message: "하나 이상의 상품이미지를 선택해주세요" }));
            }
        }

        let ingredients = "";
        if (data.ingredients_1) {
            ingredients += "1,";
        }
        if (data.ingredients_2) {
            ingredients += "2,";
        }
        if (data.ingredients_3) {
            ingredients += "3,";
        }
        if (data.ingredients_4) {
            ingredients += "4,";
        }

        if (ingredients) {
            ingredients = ingredients.slice(0, ingredients.length - 1);
        }

        if (idx && isEmpty(ingredients)) {
            setError("ingredients", { type: "manual", message: "재료를 선택해주세요" });
            error = true;
        }

        if (error) {
            return;
        }

        let formData = new FormData();
        if (idx) {
            formData.append("idx", idx);
        }
        formData.append("category", data.category.value);
        formData.append("name", data.name);
        formData.append("calories", data.calories);
        formData.append("fat", data.fat);
        formData.append("carbs", data.carbs);
        formData.append("protein", data.protein);
        formData.append("ingredients", ingredients);
        formData.append("quantity", data.quantity);
        formData.append("color", data.color);
        formData.append("useYn", data.useYn);
        formData.append("viewYn", data.viewYn);

        if (imageFiles) {
            for (let key in imageFiles) {
                if (imageFiles[key].file) {
                    formData.append("images", imageFiles[key].file);
                }
            }
        }

        return formData;
    };

    // 등록하기 / 수정하기
    const handleDataSubmit = async () => {
        dispatch(setMsgConfirmClose());

        let formData = handleFormData();
        if (!formData) {
            return;
        } else {
            setSubmitLoading(true);
        }

        // 수정하기
        if (idx) {
            // const resultAction = await dispatch(updateSummaryInfo({ url: "/web/example", data: formData }));
            // if (updateSummaryInfo.fulfilled.match(resultAction)) {
            //     // 성공
            // } else {
            //     if (resultAction.payload) {
            //         dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            //     } else {
            //         dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            //     }
            // }
            // 등록하기
        } else {
            //     const resultAction = await dispatch(createSummaryInfo({ url: "/web/example", data: formData }));
            //     if (createSummaryInfo.fulfilled.match(resultAction)) {
            //         //성공
            //     } else {
            //         if (resultAction.payload) {
            //             dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            //         } else {
            //             dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            //         }
            //     }
        }
    };

    // 페이지 이동하기
    const onClick = () => {
        onClose();
        onReset();
        dispatch(resetStates());

        return history.push({
            pathname: "/",
            search: location.search
        });
    };

    // 이미지 이전 버튼
    const onPreviousImage = () => {
        // 이미지가 하나일 때
        if (imageFiles.length <= 1) {
            return;
        }

        const prevIndex = imageIndex - 1;
        if (prevIndex < 0) {
            setImageIndex(imageFiles.length - 1);
        } else {
            setImageIndex(prevIndex);
        }
    };

    // 이미지 다음 버튼
    const onNextImage = () => {
        // 이미지가 하나일 때
        if (imageFiles.length <= 1) {
            return;
        }

        const nextIndex = imageIndex + 1;
        if (imageIndex >= imageFiles.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(nextIndex);
        }
    };

    // 입력한 정보 초기화
    const onReset = () => {
        clearErrors();
        reset({
            category: { value: "", label: "카테고리를 선택해주세요" },
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
            quantity: 0,
            useYn: "Y",
            viewYn: "Y"
        });
    };

    // 등록/수정 확인 모달창 띄우기
    const onSubmit = () => {
        setActionType("submit");
        dispatch(setMsgConfirm({ open: true, message: idx ? "디저트 정보를 수정하시겠습니까?" : "디저트 정보를 등록하시겠습니까?" }));
    };

    // 확인 모달 띄우기
    const onConfirm = (type, data) => {
        let message = "";
        if (type === "delete") {
            message = "이미지를 삭제하시겠습니까?";
            setDeleteImage(data);
        } else if (type === "editCancel") {
            message = "목록으로 돌아가시겠습니까? 입력된 정보는 수정되지 않습니다.";
        } else if (type === "uploadCancel") {
            message = "목록으로 돌아가시겠습니까? 입력된 정보는 저장되지 않습니다.";
        }

        setActionType(type);
        dispatch(setMsgConfirm({ open: true, message }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
        dispatch(clearError());
    };

    return (
        <ThemeProvider theme={formTheme}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <div className={classes.root}>
                    <div className={classes.heading}>
                        <ChevronLeftIcon onClick={onClick} />
                        <Typography variant="h2" component="h3" display="inline">
                            디저트 {idx ? "수정하기" : "등록하기"}
                        </Typography>
                    </div>
                    <Paper className={classes.paper} elevation={0}>
                        <div className={classes.contentContainer}>
                            <div className={classes.contentImage}>
                                <Typography className={classes.heading} variant="h2" component="h4" display="block">
                                    디저트 사진 등록
                                </Typography>
                                {imageFiles[imageIndex] ? (
                                    <div>
                                        <Grid className={classes.imageContainer} container justify="flex-start" alignItems="center">
                                            <img width={500} height={500} src={imageFiles[imageIndex].preview} alt="product img" />
                                            <Grid className={classes.imageButtonContainer} item container justify="space-between" alignItems="center">
                                                <Button startIcon={<ChevronLeftIcon />} className={classes.imageButton} variant="contained" onClick={onPreviousImage}></Button>
                                                <Button endIcon={<ChevronRightIcon />} className={classes.imageButton} variant="contained" onClick={onNextImage}></Button>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="flex-start" alignItems="center" className={classes.imagePreviewContainer}></Grid>
                                    </div>
                                ) : (
                                    <div className={classes.noImage}>No Image</div>
                                )}
                                <div className={classes.uploadContainer}>
                                    {imageFiles.map((image, index) => (
                                        <React.Fragment key={index}>
                                            {image && (
                                                <div key={`upload-preview-container-${index}`} className={classes.uploadPreviewContainer}>
                                                    <img key={`upload-preview-${index}`} width={70} height={70} src={image.preview} alt={`inspct-img ${index}`} />
                                                    {idx && images[index] ? (
                                                        <IconButton
                                                            key={`upload-preview-delete-button-${index}`}
                                                            aria-label="delete"
                                                            onClick={() => onConfirm("delete", { imageIndex: images[index].idx, index })}>
                                                            <Close key={`upload-preview-delete-icon-${index}`} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton key={`upload-preview-delete-button-${index}`} aria-label="delete" onClick={() => handleDeleteImage(index)}>
                                                            <Close key={`upload-preview-delete-icon-${index}`} />
                                                        </IconButton>
                                                    )}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                    {/* 다중, 중복 이미지 업로드 */}
                                    <input multiple disabled={imageLoading} onChange={handleImageFile} onClick={(e) => (e.target.value = null)} accept="image/*" id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton disabled={imageLoading} className={classes.uploadButton} color="primary" aria-label="upload product image" component="span">
                                            <AddIcon />
                                        </IconButton>
                                    </label>
                                </div>
                            </div>
                            <div className={classes.tableContainer}>
                                <Typography className={classes.heading} variant="h2" component="h4" display="block">
                                    디저트 정보 입력
                                </Typography>
                                <table className={classes.noBorderTable}>
                                    <colgroup>
                                        <col width="20%"></col>
                                        <col width="80%"></col>
                                    </colgroup>
                                    <tbody>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>카테고리</th>
                                            <td className={classes.selectContent}>
                                                <FormSelect
                                                    name="category"
                                                    defaultValue={sampleDessert ? { value: sampleDessert.category, label: sampleDessert.category } : { value: "", label: "카테고리를 선택해주세요" }}
                                                    control={control}
                                                    options={[
                                                        { value: "", label: "카테고리를 선택해주세요" },
                                                        { value: "Cupcake", label: "Cupcake" },
                                                        { value: "Cookie", label: "Cookie" }
                                                    ]}
                                                />
                                                <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.category && "카테고리를 선택해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>디저트명</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="text"
                                                    name="name"
                                                    defaultValue={sampleDessert && sampleDessert.name ? sampleDessert.name : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.name && "디저트명을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>색상</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="text"
                                                    name="color"
                                                    defaultValue={sampleDessert && sampleDessert.color ? sampleDessert.color : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.color && "색상을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>수량</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="number"
                                                    name="quantity"
                                                    defaultValue={sampleDessert && sampleDessert.quantity ? sampleDessert.quantity : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.quantity && "수량을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>디저트 소개</th>
                                            <td className={classes.content}>
                                                <textarea
                                                    aria-label="type description"
                                                    className={formClasses.textarea}
                                                    rows="10"
                                                    cols=""
                                                    name="description"
                                                    defaultValue={sampleDessert && sampleDessert.description ? sampleDessert.description : ""}
                                                    required
                                                    placeholder=""
                                                    autoComplete="off"
                                                    ref={register}></textarea>
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.description && "디저트 소개를 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>재료 선택</th>
                                            <td className={classes.content}>
                                                <CheckBox
                                                    options={[
                                                        { defaultValue: false, name: "ingredients_1", label: "chocolate" },
                                                        { defaultValue: false, name: "ingredients_2", label: "strawberry" },
                                                        { defaultValue: false, name: "ingredients_3", label: "cheese" },
                                                        { defaultValue: false, name: "ingredients_4", label: "others" }
                                                    ]}
                                                    control={control}
                                                />
                                                <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.ingredients && "재료를 선택해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>칼로리</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="number"
                                                    name="calories"
                                                    defaultValue={sampleDessert && sampleDessert.calories ? sampleDessert.calories : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.calories && "칼로리를 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>지방</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="number"
                                                    name="fat"
                                                    defaultValue={sampleDessert && sampleDessert.fat ? sampleDessert.fat : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.fat && "지방을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>프로틴</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="number"
                                                    name="protein"
                                                    defaultValue={sampleDessert && sampleDessert.protein ? sampleDessert.protein : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.protein && "프로틴을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>탄수화물</th>
                                            <td className={classes.textContentContainer}>
                                                <Input
                                                    inputType="number"
                                                    name="carbs"
                                                    defaultValue={sampleDessert && sampleDessert.carbs ? sampleDessert.carbs : ""}
                                                    control={control}
                                                    classes={formClasses}
                                                />
                                                <Typography component="p" variant="body2" className={formClasses.errorMessage}>
                                                    {errors.carbs && "탄수화물을 입력해주세요."}
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>노출 여부</th>
                                            <td className={classes.textContentContainer}>
                                                <RadioButton
                                                    name="viewYn"
                                                    defaultValue={sampleDessert && sampleDessert.viewYn ? sampleDessert.viewYn : "Y"}
                                                    control={control}
                                                    options={tableSelectOptions["viewYn"]}
                                                />
                                                {errors.viewYn && (
                                                    <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                        {errors.viewYn && "노출 여부를 선택해주세요."}
                                                    </Typography>
                                                )}
                                            </td>
                                        </tr>
                                        <tr className={classes.row}>
                                            <th className={classes.label}>판매 여부</th>
                                            <td className={classes.textContentContainer}>
                                                <RadioButton
                                                    name="useYn"
                                                    defaultValue={sampleDessert && sampleDessert.useYn ? sampleDessert.useYn : "Y"}
                                                    control={control}
                                                    options={tableSelectOptions["useYn"]}
                                                />
                                                {errors.useYn && (
                                                    <Typography component="span" variant="body2" className={formClasses.errorMessage}>
                                                        {errors.useYn && "판매 여부를 선택해주세요."}
                                                    </Typography>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Paper>
                    <Grid container justify="flex-start" alignItems="center">
                        <div className={classes.buttonsContainer}>
                            <ListButton disabled={submitLoading} text="취소" pageType="search" onClick={() => onConfirm(idx ? "editCancel" : "uploadCancel")} />
                        </div>
                        <div className={classes.buttonsContainer}>
                            {idx && location.pathname && location.pathname.includes("/edit") ? (
                                <SubmitButton text="수정하기" loading={submitLoading} type="submit" />
                            ) : (
                                <SubmitButton text="등록하기" loading={submitLoading} type="submit" />
                            )}
                        </div>
                    </Grid>
                </div>
            </form>
            <MessageModal onClose={onClose} />
            <ConfirmModal onClose={onClose} handleConfirm={actionType === "delete" ? handleRemoveImage : actionType === "editCancel" || actionType === "uploadCancel" ? onClick : handleDataSubmit} />
        </ThemeProvider>
    );
}
