import React from 'react'
import { Movie } from '../interfaces/MovieInterface'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MovieCardComponent from './MovieCardComponent'
import { COLORS, globalStyles } from '../theme/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface HorizontalSliderProps {
    title?: string,
    movies: Movie[],
}

const HorizontalSliderComponent = ({ title, movies }: HorizontalSliderProps) => {
    const navigation = useNavigation();

    const getMovieCategory = (title: string) => {

        switch(title){
            case 'Popular': return 'popular'
            case 'Top Rated': return 'top_rated'
            case 'Upcoming': return 'upcoming'
        }
    
    }

    const category = getMovieCategory(title!);

    return (
        <View style={{ height: title ? 260 : 220 }}>
            <View style={styles.headerSlider}>
                {
                    title && <Text style={{fontSize: 24,fontWeight: 'normal', color: 'white'}}>{title}</Text>
                }

                <TouchableOpacity
                onPress={() => navigation.navigate('SeeAll', {movies, category})}
                >
                    <Text style={{
                        ...globalStyles.textPrimary, 
                        fontSize: 12,
                        color: 'black',
                        backgroundColor: COLORS.textSecondary,
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 999,
                        
                        }}
                    >
                        Ver más
                    </Text>
                </TouchableOpacity>


            </View>

            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MovieCardComponent movie={item} height={200} width={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    headerSlider: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 5

    }
});

export default HorizontalSliderComponent