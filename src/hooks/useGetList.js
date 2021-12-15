import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { getData } from "api";

import useSearchParams from "hooks/useSearchParams";

import _ from "lodash";

import { searchParams } from "components/Data";
import useMessage from "hooks/useMessage";

const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

const useGetList = ({ menu, url }) => {
    // 검색 설정하기 (Search Params)
    const params = useSearchParams(searchParams[menu]);

    // Previous Search Params
    const prevParams = usePrevious(params);

    const handleMessage = useMessage();

    // API 호출
    const { isError, error, remove, ...rest } = useQuery([menu, { ...params }], () => getData(url, params), {
        enabled: params && !_.isEqual(prevParams, params) ? true : false,
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    return { params, ...rest };
};

export default useGetList;
