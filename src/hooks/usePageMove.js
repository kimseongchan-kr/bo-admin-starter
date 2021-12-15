import { useHistory, useLocation, useParams } from "react-router-dom";

const usePageMove = ({ baseUrl }) => {
    const history = useHistory();
    const location = useLocation();
    const { idx } = useParams();

    const handlePageClick = (url, index) => {
        let pathInfo = {};
        const pathname = baseUrl === "/" ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
        const param = index || idx;

        if (url === "list") {
            pathInfo = { pathname: `${baseUrl}`, search: location.search };
        } else if (url === "detail") {
            pathInfo = { pathname: `${pathname}/${param}`, search: location.search };
        } else if (url === "upload") {
            pathInfo = { pathname: `${pathname}` };
        } else if (url === "edit") {
            pathInfo = { pathname: `${pathname}/${param}`, search: location.search };
        } else {
            return;
        }

        return history.push(pathInfo);
    };

    return handlePageClick;
};

export default usePageMove;
