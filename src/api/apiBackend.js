import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 
        'Access-Control-Allow-Origin' : 'http://localhost:3000/',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
});

export default api;