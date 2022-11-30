import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IconHeader from '../components/IconHeader';
import NewsCard from '../components/NewsCard';
import FooterComponent from '../footer/footer';
//import ViewCard from '../components/ViewCard';
const HomeScreen = () => {
  const [isExpandable, setIseExpandable] = useState(false);
  const ShowMoreBtn=()=>{
    setIseExpandable(!isExpandable)
  }
  return (
    <ScrollView style={style.appstyle}>
      <IconHeader />
      <NewsCard isExpandable={isExpandable} />
      <FooterComponent isExpandable={isExpandable} ShowMoreBtn={ShowMoreBtn}/>
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
