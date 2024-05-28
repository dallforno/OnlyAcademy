import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/Profile';
import Camera from '../screens/Camera';
import Pagamento from "../screens/Pagamento";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Pagamento'>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
