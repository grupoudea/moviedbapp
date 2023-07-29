import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/Theme';
import MovieInfiniteScrollComponent from '../components/MovieInfiniteScrollComponent'
import { Movie } from '../interfaces/MovieInterface'
import { ComponentTextUtils } from '../utils/ComponentsUtils'

interface SeeAllScreenProps extends StackScreenProps<RootStackParams, 'SeeAll'> {}
 

const SeeAllScreen = ({route, navigation}: SeeAllScreenProps) => {

    const category = route.params.category
    const movies: Movie[] = route.params.movies

    console.log(route.params.category);
    console.log(" "+JSON.stringify(route.params.movies[0].title));

    const getCategoryVisualName = (title: string) => {
      switch(title){
        case 'popular': return 'Popular'
        case 'top_rated': return 'Top rated'
        case 'upcoming': return 'Upcoming'
        default: return 'Sin Categoria'
    }

    }
    
    
  return (
    <SafeAreaView>

        <View style={{
          marginHorizontal: 10, 
          marginTop: 10, 
          marginBottom: 20, 

        }}>
            <ComponentTextUtils text={getCategoryVisualName(category)} />


        </View>
        
        {/* Componente que servirá para la pantalla de search como para esta */}
        <MovieInfiniteScrollComponent movies={movies} category={category}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', 

  }
    
});

export default SeeAllScreen