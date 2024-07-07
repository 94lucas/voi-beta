import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Projects } from '../Views/Pages/Projects';
import { StopComplain } from '../Views/Pages/StopComplain';
import { ToDo } from '../Views/Pages/ToDo'
import { History } from '../Views/Pages/History'

import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {

  const Theme = useTheme();

  return (

    <Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.COLORS.PRIMARY,
        tabBarInactiveTintColor: Theme.COLORS.SECONDARY,
        headerShown: true,
        headerStyle: {
          backgroundColor: Theme.COLORS.BACKGROUND,
          height:100
        },
        headerTitleStyle: {
          color: Theme.COLORS.PRIMARY,
          fontFamily: 'monospace',
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: Theme.COLORS.BACKGROUND,
          borderTopWidth: 0,
          paddingBottom:5
        },
        tabBarLabelStyle: {
          fontFamily: 'monospace',
        }
      }}
    >

      <Screen name="Projetos" component={Projects}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="list" size={focused ? 30 : 24} color={color} style={{ marginBottom: 5 }} />
          ),
        }} />
      <Screen name="Metas" component={ToDo}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="check-square-o" size={focused ? 30 : 24} color={color} style={{ marginBottom: 5 }} />
          )
        }} />
      <Screen name="Proibições" component={StopComplain}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="remove" size={focused ? 30 : 24} color={color} style={{ marginBottom: 5 }} />
          )
        }} />
      <Screen name="Conquistas" component={History}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="diamond" size={focused ? 30 : 24} color={color} style={{ marginBottom: 5 }} />
          )
        }} />

    </Navigator>
  );
}