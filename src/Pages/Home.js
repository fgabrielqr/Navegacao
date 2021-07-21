import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';

export function Home({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title}>
                Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte | Campus Pau dos Ferros
            </Text>

            <Text style={GlobalStyles.title1}>
                Endereço: BR-405 S/N, Pau dos Ferros - RN, 59900-000
            </Text>

            <Text style={GlobalStyles.title1}>
                Telefone: (84) 4005-4109
            </Text>
        </View >
    )
}

