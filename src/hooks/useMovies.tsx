import { useEffect, useState } from "react";
import movieDB from "../api/MovieDb";
import { Movie, MovieDBResponse } from "../interfaces/MovieInterface";
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from "../services/MovieService";

interface MovieState {
	nowPlaying: Movie[],
	popular: Movie[],
	topRated: Movie[],
	upcoming: Movie[],
}

export const useSearchMovie = (debouncedValue: string = '') => {

	const [isLoading, setIsLoading] = useState(true);

	const [movies, setMovies] = useState<Movie[]>([])

	const getMovies = async (param: any) => {

		try {
			const response = await movieDB.get<MovieDBResponse>('/search/movie', { params: param });

			return response;
		} catch (error) {
			console.error("Error en la solicitud: ", error);
			throw error;
		}
	};

	const handleSearch = async (search: string) => {

		if (search && search.length > 2) {
			setIsLoading(true);

			try {
				const response = await getMovies({
					query: search,
					include_adult: false
				});

				setIsLoading(false);
				if (response && response.data) setMovies(response.data.results);
			} catch (error) {
				setIsLoading(false);
				setMovies([]);
			}
		} else {
			setIsLoading(false);
			setMovies([]);
		}
	};

	useEffect(() => {
		console.log({ debouncedValue });
		handleSearch(debouncedValue)

	}, [debouncedValue])


	return {
		movies,
		isLoading
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
		const nowPlayingResponse = getNowPlaying()
		const popularResponse = getPopular()
		const topRatedResponse = getTopRated()
		const upcomingResponse = getUpcoming();

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

export const useInfiniteFetchMovie = (category: string) => {

	const [moviesFetched, setMoviesFetched] =useState<Movie[]>([])
	const [actualPage, setActualPage] = useState(1);

	const fetchData = async () => {
		var response = undefined

		try {
			
			switch (category) {
				case 'top_rated': {
					response = await getTopRated(actualPage)
					break
				}
				case 'popular': {
					response = await getPopular(actualPage)
					break
				}
				case 'upcoming': {
					response = await getUpcoming(actualPage)
					break
				}
				default: {
					console.log("No coincide ninguna");
				}
	
			}
			const nextMovies = response?.data.results
			setActualPage(actualPage+1)

			if (nextMovies) {
				setMoviesFetched([...moviesFetched, ...nextMovies])
			}

		} catch (err) {
			console.error(err);
			
		}

		return response
	}

	useEffect(()=>{
		
		fetchData()
	}, [])

	return {
		moviesFetched,
		actualPage,
		fetchData
	}


}