import axios from 'axios';

const baseUrl = process.env.BASE_URL;

export const get = (url, opt = {}) => {
    return axios.get(baseUrl + url, opt);
}

export const post = (url, opt = {}) => {
    return axios.post(baseUrl + url, opt);
}
