import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { globalStyles, COLORS } from '../theme/Theme'

const HeaderComponent = () => {
  return (
        
    <View style={{
        position: 'absolute',
        zIndex: 999,
        top: StatusBar.currentHeight,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: COLORS.backgorudSecondary,
        opacity: 0.2,
        borderRadius: 10,
        borderColor: 'white'
       
        }}>
        <View style={{flex: 1,flexDirection: 'row',}}>
            <Text style={{...globalStyles.textPrimary, color: COLORS.textSecondary, fontSize: 30}} >M</Text>
            <Text style={{...globalStyles.textPrimary, fontSize: 30}}>ovie</Text>
        </View>
        <Icon 
            name='search'
            color='white'
            size={30}
        />

    </View>

   
  )
}

export default HeaderComponent