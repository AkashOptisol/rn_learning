import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {AppStyles} from '../../utils/styles/appStyles';
import Button from '../../components/commonComponents/button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {androidClient, iOSClient} from '../../utils/constant/commonConstant';
import appleAuth, {
  AppleRequestResponse,
} from '@invertase/react-native-apple-authentication';
import {NavigationProp} from '@react-navigation/native';

interface RegisterScreenProps {
  navigation: NavigationProp<any>;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
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
      const userDetails = await GoogleSignin.signIn();
      const user = userDetails?.user;
      const userInfo = {
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

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse: AppleRequestResponse =
        await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

      const {
        email,
        fullName,
        identityToken,
        user: appleUserId,
      } = appleAuthRequestResponse;

      // Handle user data
      const userInfo = {
        email: email,
        firstName: fullName?.givenName,
        lastName: fullName?.familyName,
        appleUserId,
        identityToken,
      };

      console.log('Apple Sign In Success:', userInfo);

      // Store the identity token and handle authentication state
      if (identityToken) {
        // Navigate to Login screen after successful authentication
        navigation.navigate('Login');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Apple Sign In Error:', error.message);
      } else {
        console.log('Apple Sign In Error:', error);
      }
    }
  };

  return (
    <View style={AppStyles.container}>
      <Button
        onPress={() => googleSignup()}
        title={'SignUp'}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <Button
        onPress={() => onAppleButtonPress()}
        title={'Apple SignUp'}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    fontWeight: '600',
  },
});
