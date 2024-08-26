import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loader = ({size = 'large', color = '#3498db', style}) => {
  return (
    <View style={[styles.loaderContainer, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Loader;
