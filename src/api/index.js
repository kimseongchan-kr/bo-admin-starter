import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;

const returnData = (res) => res.data;

const catchError = (err) => Promise.reject({ statusCode: err.response?.status || 500, message: err.response?.status ? err.message : "네트워크 에러" });

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
    const instance = axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Accept: "application/json",
            "Content-Type": fileYn ? "multipart/form-data" : "application/json; charset=UTF-8;",
            token: JSON.parse(localStorage.getItem("token"))
        }
    });

    return await instance.post(`${url}`, body).then(returnData).catch(catchError);
};

export const putData = async (url, fileYn, body) => {
    const instance = axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Accept: "application/json",
            "Content-Type": fileYn ? "multipart/form-data" : "application/json; charset=UTF-8;",
            token: JSON.parse(localStorage.getItem("token"))
        }
    });

    return await instance.put(`${url}`, body).then(returnData).catch(catchError);
};

export const deleteData = async (url, body) => {
    const instance = axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8;",
            token: JSON.parse(localStorage.getItem("token"))
        }
    });

    return await instance.delete(`${url}`, { data: body }).then(returnData).catch(catchError);
};
