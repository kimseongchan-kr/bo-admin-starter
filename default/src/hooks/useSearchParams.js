import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";
import { isEmpty, queryToObject } from "utils/common";

const useSearchParams = (searchParams) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchStates = useSelector(searchSelector);

    const [newParams, setNewParams] = useState(null);

    const handleSearchParams = useCallback(() => {
        console.log("searchParams", searchParams);
        let params = {}; // API에 보낼 params
        let newObject = {}; // redux store에 보낼 값들
        const search = queryToObject(location.search);

        // 페이지 새로고침 / 검색 조회 등을 할 경우 location.search와 redux store에 있는 값들이 다름
        // 1. location.search에 있는 params와 redux store에 있는 search state를 비교
        // 2. 만약 redux store에 있는 search state와 location.search가 다르다면
        // 3. dispatch를 해서 상태가 동일하도록
        Object.keys(searchParams).forEach((key) => {
            const currentSearchParam = search[key]; // search[key] : location.search 값
            const reduxStateName = searchParams[key]; // searchParams[key] : redux store에 있는 search state의 key
            const currentReduxState = searchStates[reduxStateName]; // searchStates[searchParams[key]] : redux store에 있는 search state의 value

            console.log(currentSearchParam, reduxStateName, currentReduxState);
            if (!isEmpty(search[key])) {
                // int값으로 들어가야 에러가 발생안함
                if (key === "pageNumber" || key === "pageShow") {
                    params[key] = parseInt(currentSearchParam);

                    if (parseInt(currentReduxState) !== parseInt(currentSearchParam)) {
                        Object.assign(newObject, { [reduxStateName]: parseInt(currentSearchParam) });
                    }
                } else if (currentReduxState !== currentSearchParam) {
                    // string 값들
                    params[key] = currentSearchParam;
                    Object.assign(newObject, { [reduxStateName]: currentSearchParam });
                } else {
                    // location.search와 redux state가 동일한 값들
                    params[key] = currentReduxState || null;
                }
            } else {
                // location.search에 없는 값들
                params[key] = currentReduxState || null;
            }
        });

        // API로 보낼때 page 번호가 0부터 시작하도록
        // location.search에는 page 번호가 1부터 시작
        if (params?.pageNumber) {
            params = { ...params, pageNumber: params.pageNumber > 1 ? params.pageNumber - 1 : 0 };
        }

        // redux store로 값을 dispatch해야할 때 실행되도록
        if (Object.keys(newObject).length > 0) {
            dispatch(setSearchFilters(newObject));
        }

        setNewParams(params);
    }, [dispatch, searchParams, searchStates, location]);

    useEffect(() => {
        handleSearchParams();
    }, [handleSearchParams]);

    return newParams;
};

export default useSearchParams;
