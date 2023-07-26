import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/CreditsInterface'
import { MovieFull } from '../interfaces/MovieInterface'
import Icon from 'react-native-vector-icons/dist/Ionicons';


interface MovieDetailProps {
    movieFull: MovieFull,
    cast: Cast[]

}

const MovieDetailComponent = ({movieFull, cast}: MovieDetailProps) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row'}}>
                <Icon 
                    name='star-outline'
                    color="grey"
                    size={16}
                />
                <Text style={styles.textDetail}> {movieFull.vote_average} </Text>
                <Text style={styles.textDetail}>   
                     - {movieFull.genres.map((genre) => genre.name).join(', ')}
                </Text>
            </View>
        </View>

        {/* Casting */}
    </>
  )
}

const styles = StyleSheet.create({
    textDetail: {
        color: 'black'
    }
});

export default MovieDetailComponent