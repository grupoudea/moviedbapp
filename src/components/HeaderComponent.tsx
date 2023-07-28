import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { globalStyles, COLORS } from '../theme/Theme'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
    backgroundColor: string,
    opacity: number,
    borderRadius: number,
}

const HeaderComponent = ({backgroundColor = 'transparent', opacity = 1, borderRadius = 0}: HeaderProps) => {
  
  const navigation = useNavigation()
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
        paddingHorizontal: 10,
        backgroundColor: backgroundColor,
        opacity: opacity,
        borderRadius: borderRadius,
       
        }}>
        <View style={{flex: 1,flexDirection: 'row',}}>
            <Text style={{...globalStyles.textPrimary, color: COLORS.textSecondary, fontSize: 30}} >M</Text>
            <Text style={{...globalStyles.textPrimary, fontSize: 30}}>ovie</Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Search')}
        >
          <Icon 
              name='search'
              color='white'
              size={30}
          />
        </TouchableOpacity>

    </View>

   
  )
}

export default HeaderComponent