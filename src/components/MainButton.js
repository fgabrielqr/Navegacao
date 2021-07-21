import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';

export function MainButton({ title, buttonColor, onPress }) {

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={DefaultStyles.button} backgroundColor={buttonColor ? buttonColor : DefaultStyles.button.backgroundColor}>
        <Text style={DefaultStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};