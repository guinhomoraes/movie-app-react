import axios from 'axios';

export const imdbApi = axios.create({
  baseURL: import.meta.env.VITE_IMDB_API_URL
});
