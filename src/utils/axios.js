import axios from "axios";

const instance = axios.create({baseURL:"http://locahost:5000"});

export default instance;