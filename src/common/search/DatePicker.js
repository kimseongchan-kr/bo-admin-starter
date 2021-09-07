import React from "react";
import PropTypes from "prop-types";

import { format } from "utils/common";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

function DateSearchPicker({ classes, caption = false, dateFormat, term, views, startDate, endDate, handleDate }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item>
                {caption && (
                    <Typography variant="caption" display="block">
                        시작일
                    </Typography>
                )}
                <DatePicker
                    autoOk
                    id="date-picker-inline-start"
                    variant="inline"
                    inputVariant="outlined"
                    allowKeyboardControl={false}
                    format={dateFormat}
                    views={views ? views : ["date"]}
                    maxDate={endDate ? endDate : new Date()}
                    maxDateMessage="시작일을 다시 선택해주세요"
                    invalidDateMessage="시작일을 선택해주세요"
                    value={startDate}
                    onChange={(e) => handleDate("startDate", format(term, e))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="calendar">
                                    <InsertInvitationIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    inputProps={{
                        "aria-label": "select start date"
                    }}
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
                    autoOk
                    id="date-picker-inline-end"
                    variant="inline"
                    inputVariant="outlined"
                    allowKeyboardControl={false}
                    format={dateFormat}
                    views={views ? views : ["date"]}
                    minDate={startDate ? startDate : new Date("1900", "01", "01")}
                    minDateMessage="종료일을 다시 선택해주세요"
                    invalidDateMessage="종료일을 선택해주세요"
                    value={endDate}
                    onChange={(e) => handleDate("endDate", format(term, e))}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="calendar">
                                    <InsertInvitationIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    inputProps={{
                        "aria-label": "select end date"
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

DateSearchPicker.propTypes = {
    classes: PropTypes.object.isRequired,
    caption: PropTypes.bool,
    dateFormat: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    views: PropTypes.array,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    handleDate: PropTypes.func.isRequired
};

export default DateSearchPicker;
