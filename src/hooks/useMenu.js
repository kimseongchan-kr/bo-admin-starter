import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMenu } from "slices/menuSlice";

const useMenu = ({ page, menu, title, num }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMenu({ menu, title, num }));
    }, [dispatch, menu, num, title]);

    return page;
};

export default useMenu;
