import { useQueries } from "react-query";
import { getData } from "api";

const useGetLists = ({ apiList }) => {
    return useQueries(
        apiList.map((api) => {
            return { queryKey: [api.key], queryFn: () => getData(api.url) };
        })
    );
};

export default useGetLists;
