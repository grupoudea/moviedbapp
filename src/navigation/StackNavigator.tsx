import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import { Movie } from '../interfaces/MovieInterface';
import { globalStyles } from '../theme/Theme';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
  Home: undefined,
  Details: Movie,
  Search: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              ...globalStyles.backgroundColorScreen
            }
           
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
    
      </Stack.Navigator>
  );
}

