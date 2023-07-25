import React from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';


import { useMovies } from '../hooks/useMovies'
import MovieCardComponent from '../components/MovieCardComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {width: windowWidth} = Dimensions.get('window')

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
            {/* <MovieCardComponent 
                movie={moviesOnCinema[9]}
            /> */}

            <View style={{
                height: 440,
                backgroundColor: 'white'
            }}>
                <Carousel 
                    data={moviesOnCinema}
                    renderItem={({item}: any) =>  <MovieCardComponent movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />
            </View>
           
        </View>
    )
}

export default HomeScreen