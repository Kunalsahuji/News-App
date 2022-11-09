import React from 'react';
import IconHeader from './src/components/IconHeader';
import NewsCard from './src/components/NewsCard';
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

const App = () => {
  return (
    <View style={style.appstyle}>
      <IconHeader />
      <NewsCard />
    </View>
  );
};
const style = StyleSheet.create({
  appstyle: {
    flex: 1,
    backgroundColor: '#f4f9f9',
  },
});

export default App;
