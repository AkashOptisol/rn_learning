import React from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles/appStyles';
import Button from '../../components/commonComponents/button';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={AppStyles.container}>
      <Button onPress={() => navigation.navigate('Register')} title={'Login'} />
    </View>
  );
};
