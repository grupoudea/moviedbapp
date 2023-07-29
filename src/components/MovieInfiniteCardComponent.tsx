import React from 'react'
import { TouchableOpacity, View, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from './FadeInImage';

interface MovieInfiniteCardProps {
    movie: Movie,
    uri: string
}

const { width, height } = Dimensions.get('window');


const MovieInfiniteCardComponent = ({movie, uri}: MovieInfiniteCardProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            key={movie.id}
            onPress={() => navigation.navigate('Details', movie)}>
            <View style={styles.cardContainer}>

                    <FadeInImage 
                         uri={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         style={{
                            width: width*0.3, 
                            height: height * 0.25, borderRadius: 24
                     }}
                     />

                {/* <Image
                    source={{ uri: uri }}
                    // source={require('../assets/images/moviePoster2.png')}
                    style={{ height: height * 0.25, borderRadius: 24 }}
                /> */}
                <Text style={{ marginLeft: 4, color: '#d1d5db' }}>
                    {
                        movie.title.length > 22 ? movie.title.slice(0, 22) + '...' : movie.title
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 8, 
        marginBottom: 16, 
        marginHorizontal: 5,
        width: width*0.3,
        

    }
    
});

export default MovieInfiniteCardComponent