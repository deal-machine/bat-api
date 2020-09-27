import axios from 'axios';

const api = axios.create({ baseURL: "https://www.superheroapi.com/api.php/4623188527754317/search/" });

export default api;