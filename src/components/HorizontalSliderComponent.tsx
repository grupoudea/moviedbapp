import React from 'react'
import { Movie } from '../interfaces/MovieInterface'
import { View, Text, FlatList } from 'react-native'
import MovieCardComponent from './MovieCardComponent'

interface HorizontalSliderProps {
    title?: string,
    movies: Movie[],
}

const HorizontalSliderComponent = ({title, movies}: HorizontalSliderProps) => {

    return (
        <View style={{ height: title? 260: 220}}>
            {
                title && <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{title}</Text>
            }
            
            <FlatList 
                data={movies} 
                renderItem={({item}: any) => (
                    <MovieCardComponent movie={item} height={200} width={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}                   
            />

        </View>

  )
}

export default HorizontalSliderComponent