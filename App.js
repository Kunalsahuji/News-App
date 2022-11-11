import React from 'react';
import IconHeader from './src/components/IconHeader';
import NewsCard from './src/components/NewsCard';
import Login from './src/components/Login';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
// import ViewCard from './src/components/ViewCard';
const App = () => {
  return (
    <View style={style.appstyle}>
      {/* <IconHeader /> */}
      {/* <NewsCard /> */}
      <Login/>
    </View>
  );
};
const style = StyleSheet.create({
  appstyle: {
    flex: 0,
    backgroundColor: '#f4f9f9',
  },
});

export default App;
