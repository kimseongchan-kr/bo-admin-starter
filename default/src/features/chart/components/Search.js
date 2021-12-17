import React from "react";

import useStyles from "styles/customize/components/SearchStyles";
import theme from "styles/theme/search";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

import DatePicker from "common/form/DatePicker";

import { searchOption } from "components/Data";

export default function Search({ title, name, term, dates, handleChange, handleDate, handleSubmit }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" component="h3" gutterBottom>
                {title}
            </Typography>
            <Grid columnSpacing={2} container justifyContent="flex-start" alignItems="center" sx={{ marginBottom: 2.5 }}>
                <Grid item>
                    <Select
                        className={classes.searchSelect}
                        IconComponent={KeyboardArrowDownIcon}
                        displayEmpty
                        size="small"
                        name={name}
                        value={term["term"]}
                        onChange={(e) => handleChange(name, e.target.value)}>
                        {searchOption["term"].map((list) => (
                            <MenuItem key={`key-${list.label}`} value={list.value}>
                                {list.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item>
                    <DatePicker term={term["term"]} name={`${name}StartDate`} value={dates["startDate"]} handleDate={handleDate} />
                </Grid>
                <Grid item>~</Grid>
                <Grid item>
                    <DatePicker term={term["term"]} name={`${name}EndDate`} value={dates["endDate"]} handleDate={handleDate} />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => handleSubmit(name)}>
                        조회
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
