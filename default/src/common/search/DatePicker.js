import React from "react";
import PropTypes from "prop-types";

import { format } from "utils/common";

import useStyles from "styles/customize/components/SearchStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";

import { dailyFormat, monthlyFormat } from "components/Data";

function DateSearchPicker({ caption = false, term, dates, handleDate }) {
    const classes = useStyles();

    return (
        <>
            <Grid item>
                {caption && (
                    <Typography variant="caption" display="block">
                        시작일
                    </Typography>
                )}
                <DatePicker
                    disableCloseOnSelect={false}
                    mask={term === "daily" ? "____/__/__" : "____/__"}
                    views={term === "monthly" ? ["month", "year"] : ["day"]}
                    maxDate={new Date()}
                    inputFormat={term === "daily" ? dailyFormat : monthlyFormat}
                    inputProps={{ "aria-label": "start date", placeholder: "" }}
                    value={dates["startDate"] || null}
                    onChange={(e) => handleDate("startDate", format(term, e))}
                    renderInput={(props) => <TextField size="small" {...props} />}
                />
            </Grid>
            <Grid item>
                {caption && <div className={classes.spacer}></div>}
                <span className={classes.dash}>~</span>
            </Grid>
            <Grid item>
                {caption && (
                    <Typography variant="caption" display="block">
                        종료일
                    </Typography>
                )}
                <DatePicker
                    disableCloseOnSelect={false}
                    mask={term === "daily" ? "____/__/__" : "____/__"}
                    views={term === "monthly" ? ["month", "year"] : ["day"]}
                    minDate={dates["startDate"] ? new Date(dates["startDate"]) : new Date("1900", "01", "01")}
                    inputFormat={term === "daily" ? dailyFormat : monthlyFormat}
                    inputProps={{ "aria-label": "end date", placeholder: "" }}
                    value={dates["endDate"] || null}
                    onChange={(e) => handleDate("endDate", format(term, e))}
                    renderInput={(props) => <TextField size="small" {...props} />}
                />
            </Grid>
        </>
    );
}

DateSearchPicker.propTypes = {
    caption: PropTypes.bool,
    dates: PropTypes.object,
    term: PropTypes.string.isRequired,
    handleDate: PropTypes.func.isRequired
};

export default DateSearchPicker;
