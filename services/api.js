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

export const getShowDetails = async (itemId, type) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/${type}/${itemId}?api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTV = async (type) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/tv/${type}?api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSearchResults = async (query, type) => {

    const url = `${BASE_URL}/search/${type}?query=${query}&api_key=${API_KEY}`

    console.log(url)

    try {
        const response = await axios.get(
            `${BASE_URL}/search/${type}?query=${query}&api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};