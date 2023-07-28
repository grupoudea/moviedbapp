import { StyleSheet } from "react-native";

export const COLORS = {
    backgroudPrimary: '#262626',
    backgorudSecondary: '#404040',
    textSecondary: '#eab308',
    textGrey: '#d4d4d4',

}

export const globalStyles = StyleSheet.create({
    backgroundColorScreen: {
        backgroundColor: COLORS.backgroudPrimary
    },
    textPrimary: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    textSecondary: {
        fontSize: 12,
        fontWeight: 'normal',
        color: COLORS.textSecondary
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'normal',
    }
    
});