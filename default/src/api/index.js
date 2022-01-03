import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8";
// instance.defaults.withCredentials = true; 토큰방식이 아닌 세션을 사용할 경우

// axios 헤더 설정
instance.interceptors.request.use((config) => {
    if (config.fileFlag === true) {
        config.headers["Content-Type"] = "multipart/form-data";
        delete config.fileFlag;
    }
    config.headers.token = localStorage.getItem("token");

    return config;
});

// 응답 처리
instance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        return Promise.reject({ statusCode: err.response?.status || 500, message: err.response?.status ? err.message : "네트워크 에러" });
    }
);

export const getData = async (url, params = {}) => await instance.get(`${url}`, { params });

export const postData = async (url, body = {}, fileFlag = false) => await instance.post(`${url}`, body, { fileFlag });

export const putData = async (url, body = {}, fileFlag = true) => await instance.put(`${url}`, body, { fileFlag });

export const deleteData = async (url, body = {}) => await instance.delete(`${url}`, { data: body });
