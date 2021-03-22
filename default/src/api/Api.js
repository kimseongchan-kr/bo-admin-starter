import axios from "axios";
import { ApiURL as api } from "api/Url";

const token = localStorage.getItem("token");

const checkPermission = (res) => {
    if (res.status === "EXAMPLE111") return (window.location.href = `/`);
    if (res.status === "EXAMPLE222") return (window.location.href = `/login`);

    return res;
};

export const getData = async (url) => {
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    };

    return await axios.get(`${api}${url}`, { headers, token }).then(checkPermission);
};

export const postData = async (url, file_yn, body) => {
    let headers = {
        Accept: "application/json"
    };

    if (!file_yn) headers["Content-Type"] = "application/json; charset=UTF-8";
    else headers["Content-Type"] = "multipart/form-data";

    body = JSON.stringify(body);

    return await axios.post(`${api}${url}`, body, { headers, token }).then(checkPermission);
};

export const putData = async (url, file_yn, body) => {
    let headers = {
        Accept: "application/json"
    };

    if (!file_yn) headers["Content-Type"] = "application/json; charset=UTF-8";
    else headers["Content-Type"] = "multipart/form-data";

    body = JSON.stringify(body);

    return await axios.post(`${api}${url}`, body, { headers, token }).then(checkPermission);
};

export const deleteData = async (url, body) => {
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    };

    return await axios.delete(`${api}${url}`, { data: body, headers }).then(checkPermission);
};
