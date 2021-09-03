import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import filterStyles from "styles/customize/FilterStyles";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FilterList from "@material-ui/icons/FilterList";

import { summaryFilter as filter } from "features/summary/Data";

export default function Filters({ filterType, handleFilter, handleSearch }) {
    const classes = filterStyles();
    const filterList = useSelector(searchSelector);

    const handleChange = (event) => {
        handleFilter({ name: event.target.name, checked: event.target.checked });
    };

    return (
        <PopupState variant="popover" popupId="filter-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton {...bindTrigger(popupState)} className={classes.iconButton} aria-label="table filter">
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
                        {filter[filterType].map((filter, index) => (
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
