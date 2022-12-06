import React, {useState} from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import IconHeader from '../components/IconHeader';
import NewsCard from '../components/NewsCard';
import FooterComponent from '../footer/footer';
const HomeScreen = ({navigation}) => {
  const [isExpandable, setIseExpandable] = useState(false);
  const ShowMoreBtn = () => {
    setIseExpandable(!isExpandable);
  };
  return (
    <ScrollView style={style.appstyle}>
      <IconHeader navigation={navigation} />
      <NewsCard isExpandable={isExpandable} />
      <FooterComponent isExpandable={isExpandable} ShowMoreBtn={ShowMoreBtn} />
    </ScrollView>
  );
};
export default HomeScreen;
const style = StyleSheet.create({
  appstyle: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#f4f9f9',
  },
});
