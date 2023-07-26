import React from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';


import { useMovies } from '../hooks/useMovies'
import MovieCardComponent from '../components/MovieCardComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HorizontalSliderComponent from '../components/HorizontalSliderComponent';

const {width: windowWidth} = Dimensions.get('window')

const HomeScreen = () => {

    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="red" size={20} />
            </View>
        )
    }



    return (
        <ScrollView>
            <View style={{marginTop: top + 20}}>

                {/* Carousel principal */}
                <View style={{
                    height: 440,
                }}>
                    <Carousel 
                        data={nowPlaying!}
                        renderItem={({item}: any) =>  <MovieCardComponent movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalSliderComponent title='Peliculas populares' movies={popular}/>
                <HorizontalSliderComponent title='Top Rated' movies={topRated}/>
                <HorizontalSliderComponent  movies={upcoming}/>

               


            </View>
        </ScrollView>
    )
}

export default HomeScreen