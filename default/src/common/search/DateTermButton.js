import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/components/SearchStyles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import SearchSelect from "common/search/SearchSelect";
import DateSearchPicker from "common/search/DatePicker";
import { dailyFormat, searchComponent, searchOption as option } from "components/Data";

function DateTermButton({ menu, handleChange, dates, handleDate, handleClick }) {
    const classes = useStyles();

    return (
        <>
            {searchComponent[menu].dateSelect && (
                <Grid item>
                    <SearchSelect name="dateType" options={option["dateType"]} handleChange={handleChange} />
                </Grid>
            )}
            <DateSearchPicker dateFormat={dailyFormat} term="daily" dates={dates} handleDate={handleDate} />
            <Grid item>
                <div className={classes.btnContainer}>
                    <Button variant="contained" onClick={() => handleClick("today")}>
                        오늘
                    </Button>
                    <Button variant="contained" onClick={() => handleClick("week")}>
                        1주일
                    </Button>
                    <Button variant="contained" onClick={() => handleClick("month", 1)}>
                        1개월
                    </Button>
                    <Button variant="contained" onClick={() => handleClick("month", 3)}>
                        3개월
                    </Button>
                    <Button variant="contained" onClick={() => handleClick("month", 6)}>
                        6개월
                    </Button>
                    <Button variant="contained" onClick={() => handleClick("reset")}>
                        기간 초기화
                    </Button>
                </div>
            </Grid>
        </>
    );
}

DateTermButton.propTypes = {
    menu: PropTypes.string,
    handleChange: PropTypes.func,
    dates: PropTypes.object,
    handleDate: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default DateTermButton;
