import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font'
import Home from './screens/home'
import Navigator from './routes/drawer'

export default function App() {

  useEffect(() => {
    Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    });
  })

  return (
    <Navigator />
  );
}
