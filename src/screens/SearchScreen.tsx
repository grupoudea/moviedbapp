import React, { useEffect, useRef, useState } from 'react'
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

	const inputRef = useRef<TextInput>(null);

	useEffect(() => {
	  if (inputRef.current) {
		inputRef.current.focus();
	  }
	}, []);

	const cleanTextInput = () => {
		setTextValue('')
		console.log(textValue);
		
	}


	return (
		<SafeAreaView style={styles.searchScreen}>
			<View style={styles.searchContainer}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.searchOpacity}
				>
					<Icon
						name='arrow-back'
						size={20}
						color={COLORS.textSecondary}
					/>
				</TouchableOpacity>

				<TextInput
					ref={inputRef}
					value={textValue}
					onChangeText={setTextValue}
					placeholder='Search movie'
					placeholderTextColor={'lightgrey'}
					style={styles.searchTextInput}
				/>
				<TouchableOpacity
					onPress={() => cleanTextInput()}
					style={styles.searchOpacity}
				>
					<Icon
						name='close'
						size={20}
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
						<>
							<Text style={{...globalStyles.textPrimary, paddingHorizontal:15}}>Resultados: {movies.length}</Text>
							<ScrollView
								ref={scrollViewRef}
								onScroll={handleScroll}
								keyboardShouldPersistTaps="handled"
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{ paddingHorizontal: 15 }}
								style={{ marginTop: 12 }}
							>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
									{
										movies.map((item, index) => {
											const uri = `https://image.tmdb.org/t/p/w500${item.poster_path}`
											return (
												<MovieInfiniteCardComponent
													key={index}
													movie={item}
													uri={uri}
													style={{
														width: width * 0.44,
														height: height * 0.3
													}}
													titleMaxLength={22}
												/>
											)
										})
									}
								</View>
							</ScrollView>
						</>

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
		marginBottom: 16,
		marginHorizontal: 16,
		borderRadius: 9999,
		borderWidth: 1,
		borderColor: '#737373'
	},
	searchTextInput: {
		flex: 1,
		paddingLeft: 15,
		fontSize: 18,
		lineHeight: 20,
		letterSpacing: 1,
		fontWeight: '500',
		color: 'white',
		height: 40
	},
	searchOpacity: {
		borderRadius: 9999,
		backgroundColor: '#737373',
		margin: 4,
		padding: 4,
	}

});

export default SearchScreen