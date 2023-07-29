import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles, COLORS } from '../theme/Theme'
import { getVectorTextPrimary } from './StringUtils'

interface ComponentTextUtilsProps {
    text: string
}

export const ComponentTextUtils = ({text}: ComponentTextUtilsProps) => {
    console.log("text: "+text);
    
    const {primerCaracter, restoDeLaFrase} = getVectorTextPrimary(text);

    console.log(primerCaracter);
    console.log(restoDeLaFrase);
    
    

    return (
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ ...globalStyles.textPrimary, color: COLORS.textSecondary, fontSize: 30 }} >{primerCaracter.toLocaleUpperCase()}</Text>
            <Text style={{ ...globalStyles.textPrimary, fontSize: 30 }}>{restoDeLaFrase.toLocaleLowerCase()}</Text>
        </View>
    )
}

