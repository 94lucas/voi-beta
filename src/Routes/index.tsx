import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { ToNot } from '../Views/Pages/ToNot';
import { StopComplain } from '../Views/Pages/StopComplain';
import { ToDo } from '../Views/Pages/ToDo'
import { History } from '../Views/Pages/History'

import { useTheme } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {

  const Theme = useTheme()
  
  return (
    <Tab.Navigator
      initialRouteName="Not"
      barStyle={{ backgroundColor: Theme.colors.card}}
      activeColor={Theme.colors.primary}
      inactiveColor={Theme.colors.text}
      
    >
      <Tab.Screen name="Not" component={ToNot}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="shield" size={24} color={color} />
          )
        }} />
      <Tab.Screen name="Tasks" component={ToDo}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="note" size={24} color={color} />
          ),
        }} />
      <Tab.Screen name="Stop" component={StopComplain}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="exclamation" size={24} color={color}  />
          )
        }} />
      <Tab.Screen name="Achievements" component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="flag" size={24} color={color} />
          )
        }} />

    </Tab.Navigator>
  );
}