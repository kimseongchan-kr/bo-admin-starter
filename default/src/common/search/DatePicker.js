import React from "react";
import PropTypes from "prop-types";

import { format } from "utils/CommonFunction";

import DateFnsUtils from "@date-io/date-fns";
import { Grid, Typography, IconButton, InputAdornment } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

function DateSearchPicker({ classes, dateFormat, term, views, startDate, endDate, handleDate }) {
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <DatePicker
                        autoOk
                        id="date-picker-inline-start"
                        variant="inline"
                        inputVariant="outlined"
                        allowKeyboardControl={false}
                        format={dateFormat}
                        views={views ? views : ["date"]}
                        maxDate={endDate}
                        maxDateMessage="시작일을 다시 선택해주세요"
                        invalidDateMessage="시작일을 선택해주세요"
                        value={startDate}
                        onChange={(e) => handleDate("startDate", format(term, e))}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <InsertInvitationIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <Grid item>
                <span className={classes.dash}>~</span>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
                    <div className={classes.spacer}></div>
                    <DatePicker
                        autoOk
                        id="date-picker-inline-end"
                        variant="inline"
                        inputVariant="outlined"
                        allowKeyboardControl={false}
                        format={dateFormat}
                        views={views ? views : ["date"]}
                        minDate={startDate}
                        minDateMessage="종료일을 다시 선택해주세요"
                        invalidDateMessage="종료일을 선택해주세요"
                        value={endDate}
                        onChange={(e) => handleDate("endDate", format(term, e))}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <InsertInvitationIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </>
    );
}

DateSearchPicker.propTypes = {
    classes: PropTypes.object.isRequired,
    dateFormat: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    views: PropTypes.array,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    handleDate: PropTypes.func.isRequired
};

export default DateSearchPicker;
