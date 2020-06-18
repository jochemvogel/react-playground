import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgah-buildah.firebaseio.com/'
});

export default instance;