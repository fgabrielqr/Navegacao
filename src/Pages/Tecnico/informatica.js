import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles';

export function informatica() {
    return (
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title}>
                Informações do Campus
            </Text>

        </View>
    )
}