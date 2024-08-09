import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './screens/DashboardScreen';
import ActivityLogScreen from './screens/ActivityLogScreen';
import HealthTipsScreen from './screens/HealthTipsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Activity Log') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Health Tips') {
              iconName = focused ? 'heart' : 'heart';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Activity Log" component={ActivityLogScreen} />
        <Tab.Screen name="Health Tips" component={HealthTipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
