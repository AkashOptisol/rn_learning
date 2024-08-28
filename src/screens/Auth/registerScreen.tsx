import React, {useEffect} from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles/appStyles';
import Button from '../../components/commonComponents/button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {androidClient, iOSClient} from '../../utils/constant/commonConstant';
export const RegisterScreen = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: androidClient,
      iosClientId: iOSClient,
      offlineAccess: true,
    });
  }, []);
  const googleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // const userout = await GoogleSignin.signOut();
      // console.log('userDetails-->', userout);
      const userDetails = await GoogleSignin.signIn();
      let user = userDetails?.user;
      let userInfo = {
        googleFirstName: user?.givenName,
        googleLastName: user?.familyName,
        email: user?.email,
      };
      console.log('GoogleSignin', userInfo);
      navigation.navigate('Login');
    } catch (error) {
      console.log('GoogleSignin error', error);
    }
  };
  return (
    <View style={AppStyles.container}>
      <Button onPress={() => googleSignup()} title={'SignUp'} />
    </View>
  );
};
