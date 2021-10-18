import axios from 'axios';

let instance = axios.create({
    baseURL: '/wp-json/'

});
export default instance;