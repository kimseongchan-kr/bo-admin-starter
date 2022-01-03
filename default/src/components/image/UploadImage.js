import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import useMessage from "hooks/useMessage";

import useStyles from "styles/customize/table/DetailTableStyles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";

import Heading from "layout/page/Heading";
import UploadImageCarousel from "components/image/UploadImageCarousel";

import { getMessageText } from "utils/common";

function UploadImage({ text, imageFiles, setImageFiles, onConfirm, handleDeleteImageFile }) {
    const classes = useStyles();
    const { idx } = useParams();

    const handleMessage = useMessage();

    const [imageIndex, setImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(false); // 이미지 업로드 로딩 상태

    // input[type="file"]로 이미지 파일 업로드
    // imageFiles로 업로드한 파일 저장하기
    const handleImageFile = async (e) => {
        try {
            setImageLoading(true);

            const files = e.target.files;
            for (const file of files) {
                // 이미지 preview 만들기
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImageFiles((prevState) => [
                        ...prevState,
                        {
                            file,
                            preview: reader.result
                        }
                    ]);
                };
                reader.readAsDataURL(file);
            }

            setImageLoading(false);
        } catch (error) {
            handleMessage({ type: "message", message: getMessageText("upload image") });
        } finally {
            setImageLoading(false);
        }
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
                {imageFiles?.map((image, index) => (
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
                <input id="icon-button-file" accept="image/*" type="file" multiple disabled={imageLoading} onChange={handleImageFile} onClick={(e) => (e.target.value = null)} />
                <label htmlFor="icon-button-file">
                    <IconButton component="span" className={classes.uploadButton} disabled={imageLoading} color="primary" aria-label="upload product image">
                        <AddIcon />
                    </IconButton>
                </label>
            </div>
        </div>
    );
}

UploadImage.propTypes = {
    imageFiles: PropTypes.array,
    text: PropTypes.string.isRequired,
    setImageFiles: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    handleDeleteImageFile: PropTypes.func.isRequired
};

UploadImage.defaultProps = {
    imageFiles: []
};

export default UploadImage;
