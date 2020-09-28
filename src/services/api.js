import axios from 'axios';
//https://www.superheroapi.com/api.php/4623188527754317/search/

const api = axios.create({ baseURL: "https://akabab.github.io/superhero-api/api/" });

export default api;