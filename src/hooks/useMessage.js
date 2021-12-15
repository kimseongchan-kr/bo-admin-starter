import { useDispatch } from "react-redux";
import { setMessage } from "slices/modalSlice";
import { setLogOut } from "slices/loginSlice";

const useMessage = () => {
    const dispatch = useDispatch();

    const handleMessage = ({ type, statusCode, message }) => {
        dispatch(setMessage({ open: true, type, message }));

        if (parseInt(statusCode) === 401) {
            dispatch(setLogOut());
            window.location.reload();
        }
    };

    return handleMessage;
};

export default useMessage;
