import movieDB from "../api/MovieDb";
import { MovieDBResponse } from "../interfaces/MovieInterface";


export const getNowPlaying = async () => {

    try {
        const nowPlayingResponse = movieDB.get<MovieDBResponse>('/movie/now_playing');
        return nowPlayingResponse
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const getPopular = async (pageNumber?: number) => {

    try {
        const popularResponse = movieDB.get<MovieDBResponse>('/movie/popular', {
            params: {
                page: pageNumber
            }
        });
        return popularResponse
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const getTopRated = async (pageNumber?: number) => {

    try {
        const topRatedResponse = movieDB.get<MovieDBResponse>('/movie/top_rated', {
            params: {
                page: pageNumber
            }
        });
        return topRatedResponse
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const getUpcoming = async (pageNumber?: number) => {

    try {
        const upcomingResponse = movieDB.get<MovieDBResponse>('/movie/upcoming', {
            params: {
                page: pageNumber
            }
        });
        return upcomingResponse
    } catch (error) {
        console.error(error);
        throw error;
    }

}