import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StatusBar, Text, View, useWindowDimensions } from 'react-native'

import Carousel from 'react-native-snap-carousel';


import { useMovies } from '../hooks/useMovies'
import MovieCardComponent from '../components/MovieCardComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HorizontalSliderComponent from '../components/HorizontalSliderComponent';
import HeaderComponent from '../components/HeaderComponent';
import { COLORS } from '../theme/Theme';
import { ComponentTextUtils } from '../utils/ComponentsUtils';

//const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const { width: windowWidth } = useWindowDimensions();
    const scrollViewRef = useRef<ScrollView>(null);
    const [headerStyle, setHeaderStyle] = useState({
        backgroundColor: 'transparent',
        opacity: 1,
        borderRadius: 0,
    });

    const handleScroll = (event: any) => {

        const offsetY = event.nativeEvent.contentOffset.y;
        const isScrollingUp = offsetY > 40; // Check if scrolling up

        // Define el estilo que deseas cuando se hace scroll hacia arriba
        const newHeaderStyle = isScrollingUp
            ? {
                backgroundColor: '#404040',
                opacity: 0.7,
                borderRadius: 12,
            }
            : {
                backgroundColor: 'transparent',
                opacity: 1,
                borderRadius: 0,
            };

        setHeaderStyle(newHeaderStyle);
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={COLORS.textGrey} size={20} style={{ marginTop: top }} />
            </View>
        )
    }


    return (
        <>
            <HeaderComponent
                backgroundColor={headerStyle.backgroundColor}
                opacity={headerStyle.opacity}
                borderRadius={headerStyle.borderRadius}
            />

            <ScrollView

                style={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                ref={scrollViewRef}
                onScroll={handleScroll}
            >
                <View style={{ marginTop: top * 3 }}>

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


                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen