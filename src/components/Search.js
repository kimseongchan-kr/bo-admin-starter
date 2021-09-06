import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";
import { handleDateClick } from "utils/common";

import search from "styles/theme/search";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "styles/customize/components/SearchStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AddButton from "common/button/DefaultButton";
import DateTermButton from "common/search/DateTermButton";
import SearchRadio from "common/search/SearchRadio";
import SearchSelect from "common/search/SearchSelect";
import SearchField from "common/search/SearchField";

import { searchComponent as component, searchOption as option, searchCaption as caption, searchRadioRow, searchSelect, buttons } from "components/Data";

export default function Search(props) {
    const classes = useStyles();
    const { heading, total, dataList, menu, handleSearchFilter, handleSearch, handleSort, onAddButtonClick } = props;
    const { dateType, gender, useYn, term, searchType, searchKeyword, startDate, endDate, sort } = useSelector(searchSelector);

    const dailyFormat = "yyyy/MM/dd";
    const value = {
        dateType,
        gender,
        useYn,
        term,
        searchType,
        startDate,
        endDate
    };

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (searchKeyword) {
            setKeyword(searchKeyword);
        } else {
            setKeyword("");
        }
    }, [searchKeyword]);

    // 기간 검색 버튼
    const handleClick = (name, months) => {
        const obj = handleDateClick(name, months);
        if (name === "reset") {
            handleSearchFilter({ type: "startDate", value: null });
            handleSearchFilter({ type: "endDate", value: null });
            handleSearchFilter({ type: "pageNumber", value: 1 });
            handleSearch({ startDate: null, endDate: null });
        } else {
            handleSearchFilter({ type: "startDate", value: obj.startDate });
            handleSearchFilter({ type: "endDate", value: obj.endDate });
            handleSearchFilter({ type: "pageNumber", value: 1 });
            handleSearch({ startDate: obj.startDate, endDate: obj.endDate });
        }
    };

    // 검색 조건 (select) 변경
    const handleChange = (e) => {
        handleSearchFilter({ type: e.target.name, value: e.target.value });

        if (e.target.name === "useYn") {
            handleSearchFilter({ type: "pageNumber", value: 1 });
            handleSearch({ [e.target.name]: e.target.value });
        }
    };

    // 검색 조건 (radio) 변경
    const handleRadioChange = (e) => {
        handleSearchFilter({ type: e.target.name, value: e.target.value });
        handleSearchFilter({ type: "pageNumber", value: 1 });
        handleSearch({ [e.target.name]: e.target.value });
    };

    // 검색 기간 변경
    const handleDate = (type, date) => {
        handleSearchFilter({ type: type, value: date });
    };

    // 검색 키워드 변경
    const handleKeyword = (value) => {
        setKeyword(value);
    };

    // 검색하기
    const handleSubmit = () => {
        handleSearchFilter({ type: "searchKeyword", value: keyword });
        handleSearchFilter({ type: "pageNumber", value: 1 });
        handleSearch({ pageNumber: 1, searchKeyword: keyword });
    };

    return (
        <ThemeProvider theme={search}>
            <Grid container justify="space-between" alignItems="center">
                <Typography variant="h3" component="h3" display="block">
                    {heading}
                </Typography>
                {buttons[menu].addTop && <AddButton icon="check" text="디저트 등록" onClick={onAddButtonClick} />}
            </Grid>
            <form autoComplete="off" noValidate>
                <table className={classes.table}>
                    <colgroup>
                        <col width="10%"></col>
                        <col width="40%"></col>
                        <col width="10%"></col>
                        <col width="40%"></col>
                    </colgroup>
                    <tbody>
                        {component[menu].date && (
                            <tr className={classes.row}>
                                <th className={classes.label}>기간검색</th>
                                <td colSpan={3} className={classes.content}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center">
                                        <DateTermButton
                                            classes={classes}
                                            dateSelect={false}
                                            dateType={dateType}
                                            dateFormat={dailyFormat}
                                            term="일간"
                                            startDate={startDate}
                                            endDate={endDate}
                                            handleClick={handleClick}
                                            handleChange={handleChange}
                                            handleDate={handleDate}
                                        />
                                    </Grid>
                                </td>
                            </tr>
                        )}
                        {component[menu].selects &&
                            searchSelect[menu].map((row, index) => {
                                return (
                                    <tr key={`tr-select-${index}`} className={classes.row}>
                                        {row.length > 1 ? (
                                            row.map((type, index) => {
                                                return (
                                                    <React.Fragment key={`frag-${index}`}>
                                                        <th key={`th-select-${index}`} className={classes.label}>
                                                            <Typography key={`p-select-${index}`}>{caption[type]}</Typography>
                                                        </th>
                                                        <td key={`td-select-${index}`} className={classes.content}>
                                                            {dataList && dataList[type] && dataList[type].length > 0 ? (
                                                                <SearchSelect name={type} value={value[type]} options={[...option[type], ...dataList[type]]} handleChange={handleChange} />
                                                            ) : (
                                                                <SearchSelect name={type} value={value[type]} options={option[type]} handleChange={handleChange} />
                                                            )}
                                                        </td>
                                                    </React.Fragment>
                                                );
                                            })
                                        ) : (
                                            <>
                                                <th key={`th-select-${index}`} className={classes.label}>
                                                    <Typography key={`p-select-${index}`}>{caption[row[0]]}</Typography>
                                                </th>
                                                <td key={`td-select-${index}`} colSpan={3} className={classes.content}>
                                                    <SearchSelect name={row[0]} value={value[row[0]]} options={option[row[0]]} handleChange={handleChange} />
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                );
                            })}
                        {component[menu].radio &&
                            searchRadioRow[menu].map((row, index) => (
                                <tr key={`tr-radio-select-${index}`} className={classes.row}>
                                    {row.length > 1 ? (
                                        row.map((type, index) => (
                                            <React.Fragment key={`frag-${index}`}>
                                                <th key={`th-label-${index}`} className={classes.label}>
                                                    <Typography key={`th-label-${index}`}>{caption[type]}</Typography>
                                                </th>
                                                <td key={`td-content-${index}`} className={classes.content}>
                                                    <SearchRadio index={index} name={type} value={value[type]} options={option[type]} handleChange={handleRadioChange} />
                                                </td>
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <>
                                            <th className={classes.label}>
                                                <Typography>{caption[row[0]]}</Typography>
                                            </th>
                                            <td colSpan={3} className={classes.content}>
                                                <SearchRadio name={row[0]} value={value[row[0]]} options={option[row[0]]} handleChange={handleRadioChange} />
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        <tr className={classes.row}>
                            <th className={classes.label}>검색</th>
                            <td colSpan={3} className={classes.content}>
                                <Grid container direction="row" justify="flex-start" alignItems="center">
                                    {component[menu].searchKeyword && (
                                        <SearchField
                                            classes={classes}
                                            searchType={searchType}
                                            searchKeyword={keyword}
                                            options={option["searchType"]}
                                            handleChange={handleChange}
                                            handleKeyword={handleKeyword}
                                        />
                                    )}
                                    <Button variant="contained" onClick={handleSubmit}>
                                        조회
                                    </Button>
                                </Grid>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Grid container justify="space-between" alignItems="center">
                <Typography variant="h4" component="h4" display="block">
                    검색된 데이터 : <span>{total ? total : 0}</span>건
                </Typography>
                <SearchSelect name="sort" value={sort} options={option["sort"]} handleChange={handleSort} />
            </Grid>
        </ThemeProvider>
    );
}
