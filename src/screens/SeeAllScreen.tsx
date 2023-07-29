import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/Theme';
import MovieInfiniteScrollComponent from '../components/MovieInfiniteScrollComponent'
import { Movie } from '../interfaces/MovieInterface'

interface SeeAllScreenProps extends StackScreenProps<RootStackParams, 'SeeAll'> {}
 

const SeeAllScreen = ({route, navigation}: SeeAllScreenProps) => {

    const category = route.params.category
    const movies: Movie[] = route.params.movies

    console.log(route.params.category);
    console.log(" "+JSON.stringify(route.params.movies[0].title));
    
    
  return (
    <SafeAreaView>
        <View>
            <Text style={globalStyles.textPrimary}>{category}</Text>
        </View>
        
        {/* Componente que servirá para la pantalla de search como para esta */}
        <MovieInfiniteScrollComponent movies={movies} category={category}/>
    </SafeAreaView>
  )
}

export default SeeAllScreen