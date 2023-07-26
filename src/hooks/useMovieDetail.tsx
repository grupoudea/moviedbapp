import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { MovieFull } from "../interfaces/MovieInterface";

interface MovieDetail {
    isLoading: boolean,
    movieFull: MovieFull,
    cast: any[]
}

export const useMovieDetail = (movieId: number) => {

    const [state, setState] = useState<MovieDetail>();

    const getMovieDetail = async () => {
        const movieDetailRs = await movieDB.get<MovieFull>(`/${movieId}`)

        console.log(movieDetailRs.data.overview);
        
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        state
    }

}