import axios from "axios";
import { API_HOST } from "../utils/api";

const atracctionsApi = axios.create({
    baseURL: `${API_HOST}/atracciones`,
})

export const getAllTasks = () => atracctionsApi.get('/')