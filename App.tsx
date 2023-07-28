import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigation/StackNavigator';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from './src/theme/Theme';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} translucent backgroundColor="transparent" barStyle="dark-content" />
      <StackNavigator />
      
    </NavigationContainer>
  )
}

export default App