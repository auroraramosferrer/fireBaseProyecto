import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Color from '../themes/Color';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Color.black, tabBarInactiveTintColor: Color.superWhite, tabBarStyle: {backgroundColor: Color.lightBlue} }}>
      <Tabs.Screen
        name="signout"
        options={{
          title:'Sign Out',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="film-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="base"
        options={{
          title: 'Base de datos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
      
    </Tabs>
  )
}

export default TabsLayout