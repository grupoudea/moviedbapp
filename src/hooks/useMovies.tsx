import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { Movie, MovieDBResponse } from "../interfaces/MovieInterface";

interface MovieState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

export const useSearchMovie = (input: string = '', timeToSearch: number = 500) => {

    const [isLoading, setIsLoading] = useState(true);
    const [debounce, setDebounce] = useState(input);

    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async (param: any) => {

        const response = await movieDB.get<Movie>('/search/movie', {params: param })

    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(input)

        }, timeToSearch)

        return () => {
            clearTimeout(timeout)
        }

    }, [input])



    return {
        h: "h"
    }
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {
        const nowPlayingResponse =  movieDB.get<MovieDBResponse>('/movie/now_playing');
        const popularResponse =  movieDB.get<MovieDBResponse>('/movie/popular');
        const topRatedResponse =  movieDB.get<MovieDBResponse>('/movie/top_rated');
        const upcomingResponse =  movieDB.get<MovieDBResponse>('/movie/upcoming');

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