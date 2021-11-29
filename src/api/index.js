import axios from 'axios';

const baseUrl = 'http://119.45.209.166:7002' || process.env.VUE_APP_DOMAIN;
export const get = (url, params = {}) => {
    return axios.get(baseUrl + url, {
        params
    });
}

export const post = (url, params = {}) => {
    return axios.post(baseUrl + url, params);
}
