import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ViewCard from './ViewCard';
import axios from 'axios';

const NewsCard = () => {
  const Data = [1, 2];
  const Category = ['All', 'Technology', 'sports', 'health'];
  const [flatListData, setFlatListData] = useState([]);

  useEffect(()=>{
     axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-10-10&sortBy=publishedAt&apiKey=0a291b64e8cc42228eb9a4d0e60283aa')
     .then((res)=>{
      setFlatListData(res.data?.articles)
     })
     .catch((err)=> {console.log("Err", err)})
  }, [])


  return (
    <View style={styles.container}>
      <FlatList
        data={Category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.category}>
            <Text style={styles.btnText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={flatListData}
        renderItem={({item}) => {
          return <ViewCard item={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 5,
    backgroundColor: '#f4f9f8',
  },
  category: {
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    marginHorizontal: 15,
    borderRadius: 50,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
});

export default NewsCard;
