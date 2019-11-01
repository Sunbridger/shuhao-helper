import axios from 'axios';

// const baseUrl = 'http://47.96.149.250:7001';

export const get = (url, opt = {}) => {
    return axios.get(url, opt);
}

export const post = (url, opt = {}) => {
    return axios.post(url, opt);
}
