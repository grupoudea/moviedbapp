import React, { useRef, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS, globalStyles } from '../theme/Theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import { useNavigation } from '@react-navigation/native'
import { useSearchMovie } from '../hooks/useMovies'
import MovieInfiniteCardComponent from '../components/MovieInfiniteCardComponent'

const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
	const navigation = useNavigation();

	const { top } = useSafeAreaInsets();
	const [textValue, setTextValue] = useState('');

	const debouncedValue = useDebouncedValue(textValue, 1500)

	const { movies, isLoading } = useSearchMovie(debouncedValue)

	const scrollViewRef = useRef(null);

	const handleScroll = () => {
		Keyboard.dismiss(); // Cierra el teclado cuando ocurre el evento de scroll
	};



	return (
		<SafeAreaView style={styles.searchScreen}>
			<View style={styles.searchContainer}>
				<TextInput
					value={textValue}
					onChangeText={setTextValue}
					placeholder='Search movie'
					placeholderTextColor={'lightgrey'}
					style={styles.searchTextInput}
				/>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.searchOpacity}
				>
					<Icon
						name='close'
						size={30}
						color={COLORS.textSecondary}
					/>
				</TouchableOpacity>

			</View>

			{/* Resultados */}

			{
				isLoading ? (
					<ActivityIndicator color={COLORS.textGrey} size={20} style={{ marginTop: top }} />
				) :
					movies.length > 0 ? (
						<ScrollView
							ref={scrollViewRef}
							onScroll={handleScroll}
							keyboardShouldPersistTaps="handled"
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingHorizontal: 15 }}
							style={{ marginTop: 12 }}
						>
							<Text style={globalStyles.textPrimary}>Resultados: {movies.length}</Text>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
								{
									movies.map((item, index) => {
										const uri = `https://image.tmdb.org/t/p/w500${item.poster_path}`
										return (
											// <TouchableOpacity
											// 	key={index}
											// 	onPress={() => navigation.navigate('Details', item)}>
											// 	<View style={{ marginTop: 8, marginBottom: 16 }}>
											// 		<Image
											// 			source={{ uri: uri }}
											// 			// source={require('../assets/images/moviePoster2.png')}
											// 			style={{ width: width * 0.44, height: height * 0.3, borderRadius: 24 }}
											// 		/>
											// 		<Text style={{ marginLeft: 4, color: '#d1d5db' }}>
											// 			{
											// 				item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title
											// 			}
											// 		</Text>
											// 	</View>
											// </TouchableOpacity>
											<MovieInfiniteCardComponent 
												movie={item}
												uri={uri}
											/>
										)
									})
								}
							</View>


						</ScrollView>
					) : (
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<Image
								source={require('../../assets/images/movieTime.png')}
								style={{ height: 384, width: 384 }}
							/>
						</View>
					)
			}



		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	searchScreen: {
		flex: 1,
		backgroundColor: COLORS.backgroudPrimary
	},
	searchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 5,
		marginHorizontal: 16,
		marginBottom: 12,
		borderRadius: 9999,
		borderWidth: 1,
		borderColor: '#737373'
	},
	searchTextInput: {
		paddingLeft: 24,
		flex: 1,
		fontSize: 16,
		lineHeight: 28,
		letterSpacing: 1,
		fontWeight: '500',
		color: 'white'
	},
	searchOpacity: {
		borderRadius: 9999,
		backgroundColor: '#737373',
		margin: 4,
		padding: 4,
	}

});

export default SearchScreen