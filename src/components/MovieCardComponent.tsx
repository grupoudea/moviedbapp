import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'

interface MovieCardProps {
    movie: Movie
}

const MovieCardComponent = ({movie}: MovieCardProps) => {

    console.log(movie.poster_path);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    

    return (
        <View style={styles.movieCardContainer}>
            <Image 
                source={{
                    uri: uri,
                }}
                style={styles.movieImage}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    movieCardContainer: {
        width: 300,
        height: 420,
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