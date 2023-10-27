import axios from "axios";

const baseUrl = (axios.defaults.baseURL = "http://localhost:4000/api");

export default baseUrl;
