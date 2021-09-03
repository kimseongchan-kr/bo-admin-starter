import axios from "axios";
import { ApiURL as api } from "api/Url";

const token = localStorage.getItem("token");

export const getData = async (url) => {
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    };

    return await axios.get(`${api}${url}`, { headers, token });
};

export const postData = async (url, file_yn, body) => {
    let headers = {
        Accept: "application/json"
    };

    if (!file_yn) headers["Content-Type"] = "application/json; charset=UTF-8";
    else headers["Content-Type"] = "multipart/form-data";

    body = JSON.stringify(body);

    return await axios.post(`${api}${url}`, body, { headers, token });
};

export const putData = async (url, file_yn, body) => {
    let headers = {
        Accept: "application/json"
    };

    if (!file_yn) headers["Content-Type"] = "application/json; charset=UTF-8";
    else headers["Content-Type"] = "multipart/form-data";

    body = JSON.stringify(body);

    return await axios.post(`${api}${url}`, body, { headers, token });
};

export const deleteData = async (url, body) => {
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
    };

    return await axios.delete(`${api}${url}`, { data: body, headers });
};
