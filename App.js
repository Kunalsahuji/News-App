import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/routes/Router';
import {StyleSheet, View} from 'react-native';
//import ViewCard from './src/components/ViewCard';
import FooterComponent from './src/footer/footer';
import HomeScreen from './src/Screens/HomeScreen';
export default function App() {
  return (
    <View style={style.appstyle}>
       <Router /> 
      {/* <HomeScreen /> */}
      {/* <FooterComponent /> */}
     
     
    </View>
  );
}

const style = StyleSheet.create({
  appstyle: {
    flex: 1,
    backgroundColor: '#f4f9f9',
  },
});
