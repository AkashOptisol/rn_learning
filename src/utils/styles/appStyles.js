import {StyleSheet, Dimensions} from 'react-native';
import Appcolors from './colors';
const {width, height} = Dimensions.get('window');
const Appdimensions = {
  width,
  height,
};
const sizes = {
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
  margin: 25,
  icon: 24,
};

const fonts = {
  regular: 'System',
  bold: 'System-Bold',
  medium: 'System-Medium',
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    backgroundColor: Appcolors.background,
  },
  text: {
    fontSize: sizes.font,
    color: Appcolors.text,
    fontFamily: fonts.regular,
  },
  textBold: {
    fontSize: sizes.font,
    color: Appcolors.text,
    fontFamily: fonts.bold,
  },
  header: {
    fontSize: sizes.base + 4,
    color: Appcolors.primary,
    fontFamily: fonts.bold,
  },
  button: {
    backgroundColor: Appcolors.primary,
    padding: sizes.padding / 2,
    borderRadius: sizes.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: sizes.font,
    color: '#fff',
    fontFamily: fonts.medium,
  },
  input: {
    height: 40,
    borderColor: Appcolors.lightText,
    borderWidth: 1,
    borderRadius: sizes.radius,
    padding: sizes.padding / 2,
    marginVertical: sizes.margin / 2,
  },
});

export {AppStyles, sizes, fonts, Appdimensions};
