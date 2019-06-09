import axios from 'axios';
export default {
    getData:()=>{
        return axios.get('https://www.v2ex.com/api/topics/latest.json').then(arr=>arr.data);//
    }
}