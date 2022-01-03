import React, { useState } from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/components/ImageCarouselStyles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Heading from "layout/page/Heading";

function ImageCarousel({ text, images, alt }) {
    const classes = useStyles();
    const [imageIndex, setImageIndex] = useState(0);

    // 작은 이미지 클릭
    const onImageClick = (index) => setImageIndex(index);

    // 이미지 이전 버튼
    const onPreviousImage = () => {
        if (imageIndex <= 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex((prevState) => prevState - 1);
        }
    };

    // 이미지 다음 버튼
    const onNextImage = () => {
        if (imageIndex >= images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex((prevState) => prevState + 1);
        }
    };

    return (
        <div className={classes.contentImage}>
            <Heading type="default" text={text} />
            {images?.length > 0 ? (
                <>
                    <Grid className={classes.imageContainer} container justifyContent="flex-start" alignItems="center">
                        <img width={500} height={500} src={images[imageIndex].img_detail} alt={alt} />
                        {images.length > 1 && (
                            <Grid className={classes.imageButtonContainer} item container justifyContent="space-between" alignItems="center">
                                <Button startIcon={<ChevronLeftIcon />} className={classes.imageButton} variant="contained" onClick={onPreviousImage}></Button>
                                <Button endIcon={<ChevronRightIcon />} className={classes.imageButton} variant="contained" onClick={onNextImage}></Button>
                            </Grid>
                        )}
                    </Grid>
                    <Grid className={classes.imagePreviewContainer} container justifyContent="flex-start" alignItems="center">
                        {images.map((img, index) => (
                            <div key={`${index}`} tabIndex={0} role="button" onClick={() => onImageClick(index)}>
                                <img className={classes.proImg} src={img.img_detail} alt={alt} />
                            </div>
                        ))}
                    </Grid>
                </>
            ) : (
                <Grid className={classes.imageContainer} container justifyContent="flex-start" alignItems="center">
                    <div className={classes.noImage}>image not found</div>
                </Grid>
            )}
        </div>
    );
}

ImageCarousel.propTypes = {
    text: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired
};

export default ImageCarousel;
