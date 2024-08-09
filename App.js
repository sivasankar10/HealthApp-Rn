import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import ActivityLogScreen from './screens/ActivityLogScreen';
import HealthTipsScreen from './screens/HealtTipsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Activity Log" component={ActivityLogScreen} />
        <Tab.Screen name="Health Tips" component={HealthTipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
