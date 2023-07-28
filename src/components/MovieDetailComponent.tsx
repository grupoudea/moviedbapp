import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/CreditsInterface'
import { MovieFull } from '../interfaces/MovieInterface'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import currencyFormatter from 'currency-formatter'
import { COLORS, globalStyles } from '../theme/Theme';


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
                    color="white"
                    size={16}
                />
                <Text style={{color: COLORS.textGrey}}> {movieFull.vote_average} </Text>
                <Text style={{color: COLORS.textGrey}}>   
                     - {movieFull.genres.map((genre) => genre.name).join(', ')}
                </Text>
            </View>

            {/* Historia */}
            <Text style={{...globalStyles.textPrimary, fontSize: 24, marginVertical: 10}}>Historia</Text>
            <Text style={{...globalStyles.subtitle, color: COLORS.textGrey}}>{movieFull.overview}</Text>


            {/* Presupuesto */}
            <Text style={{...globalStyles.textPrimary, fontSize: 24, marginVertical: 10}}>Presupuesto</Text>
            <Text style={{...globalStyles.textSecondary, fontWeight: 'bold', marginVertical: 10}}>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>

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