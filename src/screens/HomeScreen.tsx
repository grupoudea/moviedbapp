import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDB from '../api/MovieDb'
import { MovieDBNowPlaying } from '../interfaces/MovieInterface'

const HomeScreen = () => {

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
        .then(result => {
            console.log(result.data.results[0].title);
            
        })
    }, [])

    return (
        <View>
            <Text>Home</Text>
           
        </View>
    )
}

export default HomeScreen