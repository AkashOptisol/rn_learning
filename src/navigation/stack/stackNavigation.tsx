import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../screens/Auth/loginScreen';
import {RegisterScreen} from '../../screens/Auth/registerScreen';
import {getBrandConfig} from '../../config/brands';
import Config from 'react-native-config';
const Stack = createStackNavigator();

export const AppStackNavigation = () => {
  const brand = Config.BRAND;
  const appConfig = getBrandConfig(brand);
  console.log('appConfig', appConfig);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
