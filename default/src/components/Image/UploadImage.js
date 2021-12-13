import React, { useState } from "react";
import { useParams } from "react-router";

import useStyles from "styles/customize/table/DetailTableStyles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";

import Heading from "layout/Page/Heading";
import UploadImageCarousel from "components/Image/UploadImageCarousel";

export default function UploadImage({ text, imageFiles, setImageFiles, onConfirm, handleDeleteImageFile }) {
    const classes = useStyles();
    const { idx } = useParams();

    const [imageIndex, setImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(false); // 이미지 업로드 로딩 상태

    // input[type="file"]로 이미지 파일 업로드
    // imageFiles로 업로드한 파일 저장하기
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

    const handleDelete = (imageIndex) => {
        setImageIndex(0);
        handleDeleteImageFile(imageIndex);
    };

    return (
        <div className={classes.contentImage}>
            <Heading type="default" text={text} />
            <UploadImageCarousel imageFiles={imageFiles} imageIndex={imageIndex} setImageIndex={setImageIndex} />
            <div className={classes.uploadContainer}>
                {imageFiles.map((image, index) => (
                    <React.Fragment key={index}>
                        {image && (
                            <div className={classes.uploadPreviewContainer}>
                                <img width={70} height={70} src={image.preview} alt="" />
                                {idx && image.idx ? (
                                    <IconButton aria-label="delete" onClick={() => onConfirm("delete", { imageIndex: image.idx, index })}>
                                        <Close />
                                    </IconButton>
                                ) : (
                                    <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                                        <Close />
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
    );
}
