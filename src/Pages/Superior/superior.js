import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles';
import { MainButton } from '../../components/MainButton';

export function superior({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Curso de ADS" onPress={() => navigation.navigate('ads')} />
            <MainButton title="Curso de Química" onPress={() => navigation.navigate('quimica')} />
        </View>

    )
}