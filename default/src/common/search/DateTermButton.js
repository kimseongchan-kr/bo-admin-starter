import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import SearchSelect from "common/search/SearchSelect";
import DateSearchPicker from "common/search/DatePicker";
import { searchOption as option } from "components/Data";

function DateTermButton({ classes, dateSelect = false, dateType, handleChange, dateFormat, term, startDate, endDate, handleDate, handleClick }) {
    return (
        <>
            {dateSelect && <SearchSelect name="dateType" value={dateType} options={option["dateType"]} handleChange={handleChange} />}
            <DateSearchPicker classes={classes} dateFormat={dateFormat} term={term} views={["date"]} startDate={startDate} endDate={endDate} handleDate={handleDate} />
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
                        검색기간 초기화
                    </Button>
                </div>
            </Grid>
        </>
    );
}

DateTermButton.propTypes = {
    classes: PropTypes.object.isRequired,
    dateSelect: PropTypes.bool,
    dateType: PropTypes.string,
    handleChange: PropTypes.func,
    dateFormat: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    handleDate: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default DateTermButton;
