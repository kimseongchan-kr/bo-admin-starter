import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getData } from "api";
import useMessage from "hooks/useMessage";

const useGetById = ({ menu, url }) => {
    const { idx } = useParams();
    const handleMessage = useMessage();

    // 상세 데이터 불러오기
    const { isError, error, ...rest } = useQuery([`${menu} detail`, idx], () => getData(url), {
        enabled: idx ? true : false,
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    return { ...rest };
};

export default useGetById;
