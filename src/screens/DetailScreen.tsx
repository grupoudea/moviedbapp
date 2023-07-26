import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator'
import { ScrollView } from 'react-native';
import { useMovieDetail } from '../hooks/useMovieDetail';
import MovieDetailComponent from '../components/MovieDetailComponent';

const screenHeight = Dimensions.get('screen').height

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route}: DetailScreenProps) => {
  //const movie = route.params as Movie //una forma de hacerlo
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id)  

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri}}
          style={styles.posterImage}
        />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>

        {
          isLoading
          ? <ActivityIndicator size={35} color="grey" style={{marginTop: 20}}/>
          : <MovieDetailComponent movieFull={movieFull!} cast={cast} />
        }
       
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.7,
    backgroundColor: '#fff',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 10,

    elevation: 8,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    color: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
    
});

