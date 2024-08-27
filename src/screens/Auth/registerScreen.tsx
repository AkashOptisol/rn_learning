import React from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles/appStyles';
import Button from '../../components/commonComponents/button';

export const RegisterScreen = ({navigation}) => {
  return (
    <View style={AppStyles.container}>
      <Button onPress={() => navigation.navigate('Login')} title={'SignUp'} />
    </View>
  );
};
