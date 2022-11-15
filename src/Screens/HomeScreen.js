import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconHeader from '../components/IconHeader';
import NewsCard from '../components/NewsCard';
import ViewCard from '../components/ViewCard';
const HomeScreen = () => {
  return (
    <View style={style.screenstyle}>
      <IconHeader />
      <NewsCard />
    </View>
  );
};
export default HomeScreen;
const style = StyleSheet.create({
  appstyle: {
    flex: 1,
    backgroundColor: '#f4f9f9',
  },
});


















