import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Home } from './Pages/Home';

import { tecnico } from './Pages/Tecnico/tecnico';
import { alimentos } from './Pages/Tecnico/alimentos';
import { apcultura } from './Pages/Tecnico/apcultura';
import { informatica } from './Pages/Tecnico/informatica';

import { superior } from './Pages/Superior/superior';
import { ads } from './Pages/Superior/ads';
import { quimica } from './Pages/Superior/quimica';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();

const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

const HomeStack = createStackNavigator();

function parte3StackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

function parte1StackScreen() {
  return (
    <TecnicoStack.Navigator>

      <TecnicoStack.Screen name="tecnico" component={tecnico} options={{ title: 'Curso Técnico', headerTitleAlign: 'center' }} />
      <TecnicoStack.Screen name="alimentos" component={alimentos} options={{ title: 'Curso Técnico de Alimentos', headerTitleAlign: 'center' }} />
      <TecnicoStack.Screen name="apcultura" component={apcultura} options={{ title: 'Curso Técnico de Apicultura', headerTitleAlign: 'center' }} />
      <TecnicoStack.Screen name="informatica" component={informatica} options={{ title: 'Curso Técnico de Informática', headerTitleAlign: 'center' }} />
    </TecnicoStack.Navigator>
  )
}

function parte2StackScreen() {
  return (
    <SuperiorStack.Navigator>
      <SuperiorStack.Screen name="superior" component={superior} options={{ title: 'Curso Superior', headerTitleAlign: 'center' }} />
      <SuperiorStack.Screen name="ads" component={ads} options={{ title: 'Curso Superior de ADS', headerTitleAlign: 'center' }} />
      <SuperiorStack.Screen name="quimica" component={quimica} options={{ title: 'Curso Superior de Química', headerTitleAlign: 'center' }} />
    </SuperiorStack.Navigator>
  )
}

export function Routes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#00d68f',
        labelStyle: {

          fontSize: 13,
          fontWeight: '600',
        },
        inactiveTintColor: '#B7B7CC',
      }}
    >
      <Tabs.Screen name="home"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color="black" />,
          title: 'Home',
        }}
        component={parte3StackScreen} />

      <Tabs.Screen name="tecnico"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={24} color="black" />,
          title: 'Curso Técnico',
        }}
        component={parte1StackScreen} />

      <Tabs.Screen name="superior"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-graduate" size={24} color="black" />
          ),
          title: 'Curso Superior',
        }}
        component={parte2StackScreen} />
    </Tabs.Navigator>
  );
}