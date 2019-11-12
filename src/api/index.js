import axios from 'axios';

const baseUrl = process.env.VUE_APP_DOMAIN;
export const get = (url, params = {}) => {
    return axios.get(baseUrl + url, {
        params
    });
}

export const post = (url, params = {}) => {
    return axios.post(baseUrl + url, params);
}
