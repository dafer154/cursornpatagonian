/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from './src/utils/dimensions';

const App = () => {
  console.log('Device Height', DEVICE_HEIGHT);
  console.log('Device Width', DEVICE_WIDTH);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Texto</Text>
      <Text>Subtitulo SIIUUU</Text>
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={ styles.image } resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    marginTop: 5,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
});

export default App;
