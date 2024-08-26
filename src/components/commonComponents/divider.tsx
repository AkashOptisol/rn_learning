import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({style}) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default Divider;
