import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterface'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface MovieCardProps {
    movie: Movie,
    height?: number,
    width?: number
}

const MovieCardComponent = ({movie, height = 420, width = 300}: MovieCardProps) => {

    console.log(movie.poster_path);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation()
    

    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Details', movie)}
        activeOpacity={0.8}
        style={{
            width, 
            height, 
            marginHorizontal: 2, 
            paddingBottom: 20,
            paddingHorizontal: 7
        }}
        >
            <View style={styles.movieCardContainer}>
                <Image 
                    source={{
                        uri: uri,
                    }}
                    style={styles.movieImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    movieCardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 7,

        elevation: 7,
    },
    movieImage: {
       flex: 1,
       borderRadius: 18
    }
});

export default MovieCardComponent