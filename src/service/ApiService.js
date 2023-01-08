import axios from 'axios';
import {APP_VERSION, BASE_URL, os} from '../Base';
import {dispatchUnauthenticatedUser, getTokenFromGlobalStore} from '../redux/globalstore/GlobalStore';


const useAxios = axios.create({
    baseURL: BASE_URL,
});

const getToken = () => {
    const token = getTokenFromGlobalStore()
    return token;
}

useAxios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = getToken();
        config.headers['app_version'] = APP_VERSION;
        config.headers['os'] = os;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

useAxios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response?.data?.done) {
            }
        }
        return response
    },
    error => {
    
        if (error.response.status === 500) {
        }
        if (error?.response?.status === 401) {
            dispatchUnauthenticatedUser()
        }


        return Promise.reject(error);
    });
export default useAxios;