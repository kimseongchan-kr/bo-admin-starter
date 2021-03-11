import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setFilter } from "slices/searchSlice";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, IconButton, Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import FilterList from "@material-ui/icons/FilterList";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import { ExampleFilter } from "features/example/ExampleData";

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
        <PopupState variant="popover" popupId="filter-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton {...bindTrigger(popupState)} className={classes.iconButton}>
                        <FilterList />
                    </IconButton>
                    <Menu
                        {...bindMenu(popupState)}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                    >
                        {ExampleFilter[filterType].map((filter, index) => (
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
                                popupState.close();
                                handleSearch();
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
