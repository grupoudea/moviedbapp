import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'

interface MovieCardProps {
    movie: Movie,
    height?: number,
    width?: number
}

const MovieCardComponent = ({movie, height = 420, width = 300}: MovieCardProps) => {

    console.log(movie.poster_path);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    

    return (
        <View style={{width, height, marginHorizontal: 5}}>
            <View style={styles.movieCardContainer}>
                <Image 
                    source={{
                        uri: uri,
                    }}
                    style={styles.movieImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    movieCardContainer: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 7.22,

        elevation: 10,
    },
    movieImage: {
       flex: 1,
       borderRadius: 18
    }
});

export default MovieCardComponent