import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_BASE_URL_URL}/`;

axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8;";

const returnData = (res) => res.data;

const catchError = (err) => Promise.reject({ statusCode: err.response?.status || 500, errorMsg: err.response?.status ? err.message : "네트워크 에러" });

export const getData = async (url, params) => {
    const instance = axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8;",
            token: JSON.parse(localStorage.getItem("token"))
        },
        params: params || {}
    });

    return await instance.get(`${url}`).then(returnData).catch(catchError);
};

export const postData = async (url, fileYn, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));
    if (fileYn) {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    }

    return await axios.post(`${url}`, body).then(returnData).catch(catchError);
};

export const putData = async (url, fileYn, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));
    if (fileYn) {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    }

    return await axios.put(`${url}`, body).then(returnData).catch(catchError);
};

export const deleteData = async (url, body) => {
    axios.defaults.headers.common["token"] = JSON.parse(localStorage.getItem("token"));

    return await axios.delete(`${url}`, { data: body }).then(returnData).catch(catchError);
};
