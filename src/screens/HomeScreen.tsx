import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import MovieCardComponent from '../components/MovieCardComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const {moviesOnCinema, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="red" size={20} />
            </View>
        )
    }



    return (
        <View style={{marginTop: top + 20}}>
            <MovieCardComponent 
                movie={moviesOnCinema[9]}
            />
           
        </View>
    )
}

export default HomeScreen