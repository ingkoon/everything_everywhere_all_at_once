import axios from "axios";

axios.defaults.withCredentials = true;
const instance = axios.create({
    baseURL: process.env.REACT_APP_DATA_API,
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {instance};