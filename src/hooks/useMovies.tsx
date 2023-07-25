import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { Movie, MovieDBNowPlaying } from "../interfaces/MovieInterface";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesOnCinema, setMoviesOnCinema] = useState<Movie[]>([]);

    const getMovies = async () => {
        const result = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setMoviesOnCinema(result.data.results)
        setIsLoading(false)
    }
    
    useEffect(() => {
       getMovies()
    }, [])

    return {
        moviesOnCinema,
        isLoading

    }
}