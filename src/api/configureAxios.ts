import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export const apiKinoPoisk = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4/movie/",
});

export default api;
