import axios from "axios";
import { API_KEY, BASE_URL } from "./config";

export const getMovies = async (type) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${type}?api_key=${API_KEY}`
        );
        
        return response.data;
    } catch (error) {
        throw error;
    }
};
