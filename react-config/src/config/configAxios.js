import axios from "axios";
import {store} from "../store/store";
import {toast} from "react-toastify";

const configAxios = () => {
    axios.interceptors.request.use((request) => {
        const token = store.getState?.token;
        request.headers["Content-Type"] = "application/json";
        request.baseURL = process.env.REACT_APP_BASE_API;

        if (token) {
            request.headers.authorization = `bearer ${token}`;
        }
        return request;
    },(error) => {
        return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
        return response
    },(error) => {
        const pervRequest = error.config;
        toast.error(pervRequest?.data?.error?.message);

        return Promise.reject(error);
    });
}

configAxios();
