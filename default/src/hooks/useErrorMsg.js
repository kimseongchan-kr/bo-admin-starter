import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLogOut } from "slices/loginSlice";
import { setMessage } from "slices/modalSlice";

const useErrorMsg = (status, statusCode, errorMsg) => {
    const dispatch = useDispatch();

    // 에러 메시지 노출하기
    useEffect(() => {
        if (status === "failed" && errorMsg) {
            dispatch(setMessage({ open: status === "failed", message: errorMsg }));
        }

        if (parseInt(statusCode) === 401) {
            dispatch(setLogOut());
        }
    }, [dispatch, status, statusCode, errorMsg]);
};

export default useErrorMsg;
