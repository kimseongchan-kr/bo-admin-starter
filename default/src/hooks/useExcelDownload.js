import { useQuery } from "react-query";
import { getData } from "api";

import useMessage from "hooks/useMessage";
import { getMessageText } from "utils/common";

const useExcelDownload = ({ url, params }) => {
    const handleMessage = useMessage();

    // 엑셀 데이터 API
    const {
        isLoading,
        data,
        refetch: onExcelClick
    } = useQuery(["excel"], () => getData(url, params), {
        enabled: false,
        onSuccess: () => {
            try {
                const event = new MouseEvent("click", {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                document.querySelector(".file-download").dispatchEvent(event);
            } catch (error) {
                handleMessage("message", getMessageText("excel download"));
            }
        },
        onError: () => handleMessage("message", getMessageText("excel download"))
    });

    return [{ excelLoading: isLoading, excelList: data }, onExcelClick];
};

export default useExcelDownload;
