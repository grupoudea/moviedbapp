import React from 'react'
import { FlatList,  View, ActivityIndicator, Dimensions } from 'react-native';
import { Movie } from '../interfaces/MovieInterface'
import { useInfiniteFetchMovie } from '../hooks/useMovies'
import MovieInfiniteCardComponent from './MovieInfiniteCardComponent';

interface MovieInfinityScrollProps {
    movies: Movie[],
    category: string,
}

const { width, height } = Dimensions.get('window');

const MovieInfiniteScrollComponent = ({ movies, category }: MovieInfinityScrollProps) => {
    console.log("mis: " + movies.length);

    const {moviesFetched, fetchData} = useInfiniteFetchMovie(category)

    return (
        <View style={{alignItems: 'center'}}>
            <FlatList
                data={moviesFetched}
                numColumns={3}
                renderItem={({ item }) => (

                    <MovieInfiniteCardComponent 
                        movie={item}
                        uri={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        style={{
                            marginHorizontal: 5,
                            width: width*0.3, 
                            height: height * 0.25
                        }}
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