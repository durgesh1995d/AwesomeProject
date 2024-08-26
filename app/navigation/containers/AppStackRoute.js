import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screen/Dashboard';
import Cummunity from '../screen/Cummunity';
import More from '../screen/More';
import HomeBottomNav from './BottomNavigation/HomeBottomNav';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const AppStackRoute = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Dashboards" component={HomeBottomNav} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cummunity" component={Cummunity} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};

export default AppStackRoute;
