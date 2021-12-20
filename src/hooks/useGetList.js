import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { getData } from "api";

// import useMessage from "hooks/useMessage";
import useSearchParams from "hooks/useSearchParams";

import _ from "lodash";

import { chartSearchParams, searchParams } from "components/Data";

const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

const useGetList = ({ menu, url, type }) => {
    // 검색 설정하기 (Search Params)
    const params = useSearchParams(menu === "ChartTable" ? searchParams[menu][type] : searchParams[menu], chartSearchParams);

    // Previous Search Params
    const prevParams = usePrevious(params);

    // const handleMessage = useMessage();

    // API 호출
    const { isError, error, ...rest } = useQuery([menu, { ...params }], () => getData(url, params), {
        enabled: params && !_.isEqual(prevParams, params) ? true : false
        // onError: (error) => handleMessage({ type: "message", ...error })
    });

    return { params, ...rest };
};

export default useGetList;
