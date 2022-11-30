import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ViewCard from './ViewCard';
import axios from 'axios';

const NewsCard = (props) => {
  const {isExpandable} = props;
  const Category = ['All', 'Technology', 'sports', 'health'];
  const [flatListData, setFlatListData] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=apple&from=2022-11-29&to=2022-11-29&sortBy=popularity&apiKey=0a291b64e8cc42228eb9a4d0e60283aa',
      )
      .then(res => {
        setFlatListData(res.data?.articles);
      })
      .catch(err => {
        console.log('Err', err);
      });
  }, []);

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
        data={
          isExpandable ? flatListData.slice(0, 10) : flatListData.slice(0, 2)
        }
        //keyExtractor={item:flatListData,index:{10}
        //data={flatListData}
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
    //height: '100%',
  },
  category: {
    marginVertical: 10,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 18,
    marginHorizontal: 10,
    borderRadius: 45,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
});

export default NewsCard;
