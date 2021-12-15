import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";
import { getCurrentSearchParams, queryToString } from "utils/common";

const useSearch = ({ params }) => {
    const history = useHistory();
    const location = useLocation();

    const searchStates = useSelector(searchSelector);

    // 검색하기 (location.search 값 변경)
    const handleSearch = (searchItems) => {
        const searchParams = getCurrentSearchParams(searchStates, params);
        return history.push({
            pathname: location.pathname,
            search: queryToString({ ...searchParams, ...searchItems })
        });
    };

    return handleSearch;
};

export default useSearch;
