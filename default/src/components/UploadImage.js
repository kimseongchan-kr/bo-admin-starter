import React from "react";
import { useParams } from "react-router";

import useStyles from "styles/customize/table/DetailTableStyles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";

export default function UploadImage({ imageLoading, imageFiles, images, handleImageFile, onConfirm, handleDeleteImage }) {
    const classes = useStyles();
    const { idx } = useParams();

    return (
        <div className={classes.uploadContainer}>
            {imageFiles.map((image, index) => (
                <React.Fragment key={index}>
                    {image && (
                        <div className={classes.uploadPreviewContainer}>
                            <img width={70} height={70} src={image.preview} alt="" />
                            {idx && images[index] ? (
                                <IconButton aria-label="delete" onClick={() => onConfirm("delete", { imageIndex: images[index].idx, index })}>
                                    <Close />
                                </IconButton>
                            ) : (
                                <IconButton aria-label="delete" onClick={() => handleDeleteImage(index)}>
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
    );
}
