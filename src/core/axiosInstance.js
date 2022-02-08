import axios from "axios";

const headers = {};
const baseURL = `${process.env.REACT_APP_COUNTRIES}`;

const instance = axios.create({
  baseURL,
  headers,
});

export default instance;
