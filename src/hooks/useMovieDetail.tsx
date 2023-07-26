import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { MovieFull } from "../interfaces/MovieInterface";
import { Cast, Credits } from "../interfaces/CreditsInterface";

interface MovieDetail {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[]
}

export const useMovieDetail = (movieId: number) => {

    const [state, setState] = useState<MovieDetail>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    console.log(movieId);
    

    const getMovieDetail = async () => {
        const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const creditsDetailPromise = movieDB.get<Credits>(`/${movieId}/credits`)

        const [movieDetailResponse, creditDetailResponse] = await Promise.all([
            movieDetailPromise, 
            creditsDetailPromise
        ])

        setState({
            isLoading: false,
            movieFull: movieDetailResponse.data,
            cast: creditDetailResponse.data.cast
        })


        
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        ...state
    }

}