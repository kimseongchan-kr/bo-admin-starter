import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/components/ImageCarouselStyles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function UploadImageCarousel({ imageIndex, setImageIndex, imageFiles }) {
    const classes = useStyles();

    // 이미지 이전 버튼
    const onPreviousImage = () => {
        if (imageIndex <= 0) {
            setImageIndex(imageFiles.length - 1);
        } else {
            setImageIndex((prevState) => prevState - 1);
        }
    };

    // 이미지 다음 버튼
    const onNextImage = () => {
        if (imageIndex >= imageFiles.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex((prevState) => prevState + 1);
        }
    };

    return imageFiles[imageIndex] ? (
        <div>
            <Grid className={classes.imageContainer} container justifyContent="flex-start" alignItems="center">
                <img width={500} height={500} src={imageFiles[imageIndex].preview} alt="product img" />
                {imageFiles.length > 1 && (
                    <Grid className={classes.imageButtonContainer} item container justifyContent="space-between" alignItems="center">
                        <Button startIcon={<ChevronLeftIcon />} className={classes.imageButton} variant="contained" onClick={onPreviousImage} />
                        <Button endIcon={<ChevronRightIcon />} className={classes.imageButton} variant="contained" onClick={onNextImage} />
                    </Grid>
                )}
            </Grid>
        </div>
    ) : (
        <div className={classes.noImage} />
    );
}

UploadImageCarousel.propTypes = {
    imageFiles: PropTypes.array,
    imageIndex: PropTypes.number.isRequired,
    setImageIndex: PropTypes.func.isRequired
};

UploadImageCarousel.defaultProps = {
    imageFiles: []
};

export default UploadImageCarousel;
