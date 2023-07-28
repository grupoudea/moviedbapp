import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, StatusBar, Text, View, useWindowDimensions } from 'react-native'

import Carousel from 'react-native-snap-carousel';


import { useMovies } from '../hooks/useMovies'
import MovieCardComponent from '../components/MovieCardComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import HorizontalSliderComponent from '../components/HorizontalSliderComponent';
import HeaderComponent from '../components/HeaderComponent';
import { COLORS } from '../theme/Theme';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    console.log("top: "+top);
    

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={COLORS.textGrey} size={20} style={{marginTop: top}} />
            </View>
        )
    }


    return (
        <>
            <HeaderComponent />
            <ScrollView
                style={{ flexGrow: 1}}
                showsVerticalScrollIndicator={false}
                
            >         
                <View style={{ marginTop:  top*3}}>

                    {/* Carousel principal */}
                    <View style={{
                        height: 440,
                    }}>
                        <Carousel
                            data={nowPlaying!}
                            renderItem={({ item }: any) => <MovieCardComponent movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>

                    {/* Peliculas populares */}
                    <HorizontalSliderComponent title='Popular' movies={popular} />
                    <HorizontalSliderComponent title='Top Rated' movies={topRated} />
                    <HorizontalSliderComponent title='Upcoming' movies={upcoming} />
                    <HorizontalSliderComponent title='Upcoming' movies={upcoming} />
                    <HorizontalSliderComponent title='Upcoming' movies={upcoming} />
                    <HorizontalSliderComponent title='Upcoming' movies={upcoming} />


                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen