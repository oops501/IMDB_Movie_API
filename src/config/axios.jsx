import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=de1d97d0&s=",
});
