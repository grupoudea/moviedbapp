import React from 'react'
import { FlatList,  View, ActivityIndicator } from 'react-native';
import { Movie } from '../interfaces/MovieInterface'
import { useInfiniteFetchMovie } from '../hooks/useMovies'
import MovieInfiniteCardComponent from './MovieInfiniteCardComponent';

interface MovieInfinityScrollProps {
    movies: Movie[],
    category: string,
}


const MovieInfiniteScrollComponent = ({ movies, category }: MovieInfinityScrollProps) => {
    console.log("mis: " + movies.length);

    const {moviesFetched, actualPage, fetchData} = useInfiniteFetchMovie(category)

    return (
        <View style={{alignItems: 'center'}}>
            <FlatList
                data={moviesFetched}
                numColumns={3}
                renderItem={({ item }) => (

                    <MovieInfiniteCardComponent 
                        movie={item}
                        uri={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                onEndReached={fetchData}
                onEndReachedThreshold={0.4}
                ListFooterComponent={
                    <ActivityIndicator 
                        style={{height: 100}}
                        color='grey'
                        size={20}
                    />
                }
            />

        </View>
    )
}

export default MovieInfiniteScrollComponent