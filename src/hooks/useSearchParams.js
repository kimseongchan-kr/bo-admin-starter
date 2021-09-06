import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import { setSearchFilter } from "slices/searchSlice";

import { queryToObject } from "utils/common";

const useSearchParams = (searchParams, urlParams) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [newParams, setNewParams] = useState(null);

    const handleSearchParams = useCallback(() => {
        let params = { sort: "latest" };
        if (location.search) {
            params = queryToObject(location.search);

            Object.keys(params).forEach(async (key) => {
                if (key === "pageNumber" || key === "pageShow") {
                    urlParams[key] = parseInt(urlParams[key]);
                    params[key] = parseInt(params[key]);
                }

                if (urlParams[key] !== params[key]) {
                    await dispatch(setSearchFilter({ type: searchParams[key], value: params[key] }));
                }
            });

            params = { ...params, currentPage: params.pageNumber > 1 ? params.pageNumber - 1 : 0 };
        }
        setNewParams(params);
    }, [dispatch, searchParams, urlParams, location.search]);

    useEffect(() => {
        handleSearchParams();
    }, [handleSearchParams]);

    return newParams;
};

export default useSearchParams;
