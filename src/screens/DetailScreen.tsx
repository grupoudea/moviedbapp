import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator'
import { ScrollView } from 'react-native';
import { useMovieDetail } from '../hooks/useMovieDetail';
import MovieDetailComponent from '../components/MovieDetailComponent';
import { COLORS, globalStyles } from '../theme/Theme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('screen').height

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  //const movie = route.params as Movie //una forma de hacerlo
  const { top } = useSafeAreaInsets();

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id)  

  return (
    <ScrollView showsVerticalScrollIndicator={false} >

      {/* Boton para regresas */}

      <View style={{...styles.backButton, marginTop: top}}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon 
            color={COLORS.textGrey}
            name='arrow-back-outline'
            size={30}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{uri}}
          style={styles.posterImage}
        />
      </View>

      <View style={styles.marginContainer}>
        <Text style={globalStyles.textPrimary}>{movie.original_title}</Text>
        <Text style={globalStyles.textSecondary}>{movie.title}</Text>
      </View>

      <View>

        {
          isLoading
          ? <ActivityIndicator size={35} color="grey" style={{marginTop: top}}/>
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
    backgroundColor: COLORS.backgroudPrimary,
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
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5,
  }
    
});

