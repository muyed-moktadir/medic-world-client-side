import axios from "axios";

export const fatcher = axios.create({
    baseURL:"options.json"
})