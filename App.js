import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/routes/Router';
import {StyleSheet, View} from 'react-native';
export default function App() {
  console.disableYellowBox = true;

  return (
    <View style={style.appstyle}>
      <Router />
    </View>
  );
}

const style = StyleSheet.create({
  appstyle: {
    flex: 1,
    backgroundColor: '#f4f9f9',
  },
});
