import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { Movie, MovieDBResponse } from "../interfaces/MovieInterface";

interface MovieState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MovieState>()

    const getMovies = async () => {
        const nowPlayingResponse =  movieDB.get<MovieDBResponse>('/now_playing');
        const popularResponse =  movieDB.get<MovieDBResponse>('/popular');
        const topRatedResponse =  movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingResponse =  movieDB.get<MovieDBResponse>('/upcoming');

        const responses = await Promise.all([
            nowPlayingResponse,
            popularResponse,
            topRatedResponse,
            upcomingResponse
        ])
        
        setMovieState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upcoming: responses[3].data.results
        })
        setIsLoading(false)
    }
    
    useEffect(() => {
       getMovies()
    }, [])

    return {
        ...movieState,
        isLoading

    }
}