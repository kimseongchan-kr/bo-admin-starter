import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getData } from "api/Api";

import { setMessage } from "slices/modalSlice";

const useExcel = (url, params) => {
    const dispatch = useDispatch();

    // 엑셀 데이터 API
    const { isLoading, data, refetch } = useQuery(["excel"], () => getData(url, params), {
        enabled: false,
        onSuccess: () => setExcelSuccess(true)
    });

    const [excelSuccess, setExcelSuccess] = useState(false);

    // 엑셀 데이터 불러오기
    const onExcelClick = () => refetch();

    // 엑셀 다운로드하기
    useEffect(() => {
        try {
            if (excelSuccess) {
                const event = new MouseEvent("click", {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                document.querySelector(".file-download").dispatchEvent(event);
            }
        } catch (error) {
            dispatch(setMessage({ open: true, type: "message", message: "엑셀 다운로드 요청 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요." }));
        } finally {
            setExcelSuccess(false);
        }
    }, [dispatch, excelSuccess]);

    return [{ excelList: data, excelLoading: isLoading }, onExcelClick];
};

export default useExcel;
