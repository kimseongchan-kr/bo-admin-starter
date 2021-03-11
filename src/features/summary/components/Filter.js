import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { IconButton, Typography } from "@material-ui/core";
import FilterList from "@material-ui/icons/FilterList";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setFilter } from "slices/searchSlice";
import { SummaryFilter } from "../SummaryData";

const useStyles = makeStyles(() => ({
    iconButton: {
        padding: "0 4px",
        height: 48,
        lineHeight: "48px"
    },
    listItem: {
        height: 32
    },
    okButton: {
        display: "block",
        textAlign: "center",
        height: 32,
        borderTop: "1px solid #3d39351a"
    }
}));

export default function Filters({ filterType, handleSearch }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const filterList = useSelector(searchSelector);

    const handleChange = async (event) => {
        await dispatch(setFilter({ name: event.target.name, checked: event.target.checked }));
    };

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton {...bindTrigger(popupState)} className={classes.iconButton}>
                        <FilterList />
                    </IconButton>
                    <Menu {...bindMenu(popupState)} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                        {SummaryFilter[filterType].map((filter, index) => (
                            <MenuItem key={`menu-item-${index}`} className={classes.listItem}>
                                <FormControlLabel
                                    key={`form-control-label-${index}`}
                                    control={
                                        <Checkbox
                                            key={`checkbox-${index}`}
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            checked={filterList[filter]}
                                            name={filter}
                                            onChange={handleChange}
                                        />
                                    }
                                    label={filter}
                                />
                            </MenuItem>
                        ))}
                        <MenuItem
                            onClick={() => {
                                handleSearch();
                                popupState.close();
                            }}
                            className={classes.okButton}
                        >
                            <Typography variant="button" display="block" align="center">
                                확인
                            </Typography>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
