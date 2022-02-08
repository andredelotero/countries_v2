import axios from "../axiosInstance";

export const getCountries = () => axios.get("/all");
