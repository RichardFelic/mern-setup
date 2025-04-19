import axios from "axios";


const URL = import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL: URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;