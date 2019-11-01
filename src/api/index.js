import axios from 'axios';

const baseUrl = process.env.VUE_APP_DOMAIN;
console.log(baseUrl, 'baseUrl');
export const get = (url, opt = {}) => {
    return axios.get(baseUrl + url, opt);
}

export const post = (url, opt = {}) => {
    return axios.post(baseUrl + url, opt);
}
