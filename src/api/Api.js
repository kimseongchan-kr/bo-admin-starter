import axios from "axios";
import { ApiURL as api } from "api/Url";

axios.defaults.baseURL = `${api}`;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8;";

export const getData = async (url, params) => {
    const instance = axios.create({
        baseURL: `${api}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8;",
            token: JSON.parse(localStorage.getItem("token"))
        },
        params: params ? params : {}
    });

    return await instance.get(`${url}`);
};

export const postData = async (url, file_yn, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));
    if (file_yn) {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    }

    return await axios.post(`${url}`, body);
};

export const putData = async (url, file_yn, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));
    if (file_yn) {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    }

    return await axios.put(`${url}`, body);
};

export const deleteData = async (url, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));

    return await axios.delete(`${url}`, { data: body });
};
