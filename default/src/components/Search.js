import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";
import { handleDateClick } from "utils/common";

import theme from "styles/theme/search";
import { ThemeProvider } from "@mui/material/styles";
import useStyles from "styles/customize/components/SearchStyles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AddButton from "common/button/DefaultButton";
import DateTermButton from "common/search/DateTermButton";
import SearchRadio from "common/search/SearchRadio";
import SearchSelect from "common/search/SearchSelect";
import SearchField from "common/search/SearchField";

import { searchComponent as component, searchCaption as caption, searchRadioRow, searchSelect, buttons } from "components/Data";

export default function Search(props) {
    const { heading, total, dataList, menu, handleSearch, onAddButtonClick } = props;
    const { date, selects, radio, searchKeyword } = component[menu];
    const { addTopButton } = buttons;

    const classes = useStyles();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);

    const [searchType, setSearchType] = useState("all");
    const [keyword, setKeyword] = useState("");
    const [dates, setDates] = useState({ startDate: null, endDate: null }); // startDate: 시작일, endDate: 종료일

    useEffect(() => {
        setKeyword(searchState["searchKeyword"] || ""); // 검색어 초기화
        setSearchType(searchState["searchType"] || "all"); // 검색 조건 초기화
        setDates((prev) => ({ ...prev, startDate: searchState["startDate"] || null, endDate: searchState["endDate"] || null })); // 시작일, 종료일 초기화
    }, [searchState]);

    // 기간 검색 버튼
    const handleClick = (name, months) => {
        const dates = handleDateClick(name, months); // dates: {startDate, endDate}
        handleSearchFilter(dates);
    };

    // 검색 조건 (select) 변경
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "searchType" || name === "dateType") {
            setSearchType(value);
        } else {
            handleSearchFilter({ [name]: value });
        }
    };

    // 검색 조건 (radio) 변경
    const handleRadioChange = (e) => handleSearchFilter({ [e.target.name]: e.target.value });

    // 검색 기간 (기간 검색 부분의 Date Picker) 변경
    const handleDate = (type, date) => setDates((prev) => ({ ...prev, [type]: date }));

    // 검색 키워드 변경
    const handleKeyword = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        } else {
            setKeyword(e.target.value);
        }
    };

    // 조회 버튼 클릭
    const handleSubmit = () => handleSearchFilter({ ...dates, searchType, searchKeyword: keyword });

    // 테이블 데이터 정렬하기
    const handleSort = (e) => handleSearchFilter({ [e.target.name]: e.target.value });

    // 검색하기
    const handleSearchFilter = (obj) => {
        // 새로 검색할 경우 페이지 번호 초기화하기
        if (parseInt(searchState["pageNumber"]) > 1) {
            Object.assign(obj, { pageNumber: 1 });
        }

        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root} autoComplete="off" noValidate>
                <Grid sx={{ height: "70px", py: 2, px: 2.5 }} container justifyContent="space-between" alignItems="center">
                    <Typography variant="h3" component="h3">
                        {heading}
                    </Typography>
                    {addTopButton[menu] && <AddButton text="디저트 등록" onClick={() => onAddButtonClick("upload")} />}
                </Grid>
                <table className={classes.table}>
                    <colgroup>
                        <col width="10%"></col>
                        <col width="40%"></col>
                        <col width="10%"></col>
                        <col width="40%"></col>
                    </colgroup>
                    <tbody>
                        {date && (
                            <tr>
                                <th>기간검색</th>
                                <td colSpan={3}>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                        <DateTermButton menu={menu} handleChange={handleChange} dates={dates} handleDate={handleDate} handleClick={handleClick} />
                                    </Grid>
                                </td>
                            </tr>
                        )}
                        {selects &&
                            searchSelect[menu].map((row, index) => {
                                return (
                                    <tr key={`select-${index}`}>
                                        {row.length > 1 ? (
                                            row.map((type, index) => {
                                                return (
                                                    <React.Fragment key={`search-select-${index}`}>
                                                        <th>{caption[type]}</th>
                                                        <td>
                                                            <SearchSelect name={type} dataList={dataList} handleChange={handleChange} />
                                                        </td>
                                                    </React.Fragment>
                                                );
                                            })
                                        ) : (
                                            <>
                                                <th>{caption[row[0]]}</th>
                                                <td colSpan={3}>
                                                    <SearchSelect name={row[0]} dataList={dataList} handleChange={handleChange} />
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                );
                            })}
                        {radio &&
                            searchRadioRow[menu].map((row, index) => (
                                <tr key={`radio-${index}`}>
                                    {row.length > 1 ? (
                                        row.map((type, index) => (
                                            <React.Fragment key={`search-radio-${index}`}>
                                                <th>{caption[type]}</th>
                                                <td>
                                                    <SearchRadio name={type} dataList={dataList} handleChange={handleRadioChange} />
                                                </td>
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <>
                                            <th>{caption[row[0]]}</th>
                                            <td colSpan={3}>
                                                <SearchRadio name={row[0]} dataList={dataList} handleChange={handleRadioChange} />
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        <tr>
                            <th>검색</th>
                            <td colSpan={3}>
                                <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                    {searchKeyword && <SearchField searchType={searchType} searchKeyword={keyword} handleChange={handleChange} handleKeyword={handleKeyword} />}
                                    <Grid item>
                                        <Button variant="contained" onClick={handleSubmit}>
                                            조회
                                        </Button>
                                    </Grid>
                                </Grid>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Grid sx={{ pb: 2.5 }} container justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h4">
                    검색된 데이터 : <span>{total ? total : 0}</span>건
                </Typography>
                <SearchSelect name="sort" handleChange={handleSort} />
            </Grid>
        </ThemeProvider>
    );
}
