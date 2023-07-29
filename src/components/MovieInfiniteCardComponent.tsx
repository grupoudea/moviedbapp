import React from 'react'
import { TouchableOpacity, View, Text, Dimensions, StyleSheet, ImageStyle, StyleProp } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from './FadeInImage';

const { width, height } = Dimensions.get('window');


interface MovieInfiniteCardProps {
    movie: Movie,
    uri: string,
    style?: StyleProp<ImageStyle>,
    titleMaxLength?: number

}

const MovieInfiniteCardComponent = ({movie, uri, style = {}, titleMaxLength = 15}: MovieInfiniteCardProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            key={movie.id}
            onPress={() => navigation.navigate('Details', movie)}>

            <View style={StyleSheet.compose(styles.cardContainer, style)}>

                <FadeInImage 
                    uri={uri}
                    style={{
                        ...style as any, 
                        marginHorizontal: 0,
                        borderRadius: 24,
                        marginBottom: 2
                    }}
                />
                <Text style={{ marginLeft: 4, color: '#d1d5db' }}>
                    {
                        movie.title.length > titleMaxLength ? movie.title.slice(0, titleMaxLength) + '...' : movie.title
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 8, 
        marginBottom: 30, 
    }
    
});

export default MovieInfiniteCardComponent