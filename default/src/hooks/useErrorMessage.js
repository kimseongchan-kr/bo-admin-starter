import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogOut } from "slices/loginSlice";
import useMessage from "hooks/useMessage";

const useErrorMsg = ({ isError, statusCode, message }) => {
    const dispatch = useDispatch();
    const handleMessage = useMessage();

    // 에러 메시지 노출하기
    useEffect(() => {
        if (isError) {
            handleMessage("message", message);
        }

        if (parseInt(statusCode) === 401) {
            dispatch(setLogOut());
            window.location.reload();
        }
    }, [dispatch, handleMessage, isError, statusCode, message]);
};

export default useErrorMsg;
