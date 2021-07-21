import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../../styles/GlobalStyles';
import { MainButton } from '../../components/MainButton';

export function tecnico({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Curso de Alimentos" onPress={() => navigation.navigate('alimentos')} />
            <MainButton title="Curso de Apicultura" onPress={() => navigation.navigate('apcultura')} />
            <MainButton title="Curso de Informática" onPress={() => navigation.navigate('informatica')} />
        </View>
    )
}