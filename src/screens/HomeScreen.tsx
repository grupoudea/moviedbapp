import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home</Text>
            <Button 
            title='ir a detalle'
            onPress={ () => navigation.navigate('Details') }

            />
        </View>
    )
}

export default HomeScreen