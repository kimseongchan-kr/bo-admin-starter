import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "slices/menuSlice";

export default function MenuRedux({ menu, title, num }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMenu({ menu, title, num }));
    }, [dispatch, menu, num, title]);

    return <></>;
}
