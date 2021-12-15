import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector, setMenu } from "slices/menuSlice";

import _ from "lodash";

const useMenu = ({ page, menu, menuTitle, menuNum }) => {
    const dispatch = useDispatch();
    const menuState = useSelector(menuSelector);

    useEffect(() => {
        if (!_.isEqual(menuState, { menu, menuTitle, menuNum })) {
            dispatch(setMenu({ menu, menuTitle, menuNum }));
        }
    }, [dispatch, menuState, menu, menuTitle, menuNum]);

    return page;
};

export default useMenu;
