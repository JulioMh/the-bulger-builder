import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7dd59.firebaseio.com/'

});

export default instance;