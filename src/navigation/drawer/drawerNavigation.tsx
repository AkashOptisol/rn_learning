import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RegisterScreen} from '../../screens/Auth/registerScreen';
import {AppTabNavigation} from '../tab/tabNavigation';
const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AppTabNavigation} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};
