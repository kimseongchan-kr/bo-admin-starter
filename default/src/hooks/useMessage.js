import { useDispatch } from "react-redux";
import { setMessage } from "slices/modalSlice";

const useMessage = () => {
    const dispatch = useDispatch();

    const handleMessage = (type, message) => dispatch(setMessage({ open: true, type, message }));

    return handleMessage;
};

export default useMessage;
