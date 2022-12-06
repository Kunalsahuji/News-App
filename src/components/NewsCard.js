import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import ViewCard from './ViewCard';
import axios from 'axios';

const NewsCard = props => {
  const {isExpandable} = props;
  const Category = ['all', 'technology', 'sports', 'health'];
  const [flatListData, setFlatListData] = useState([]);
  const [click, setClick] = useState(0);
  const [onClick, setOnClick] = useState('all');
  const [loading, setLoading] = useState(true);
  const onCategoryClick = (item, index) => {
    setClick(index);
    setOnClick(item);
  };

  useEffect(() => {
    const getData = async () => {
      //console.log(click);
      let URL = '';
      if (onClick === 'all') {
        URL = `https://newsapi.org/v2/top-headlines?country=&us&category=health&apiKey=0a291b64e8cc42228eb9a4d0e60283aa`;
      } else {
        URL = `https://newsapi.org/v2/top-headlines?country=us&category=${onClick}&apiKey=0a291b64e8cc42228eb9a4d0e60283aa`;
      }

      await axios
        .get(URL)

        .then(res => {
          setFlatListData(res.data?.articles);
          setTimeout(() => {
            setLoading(false);
            setFlatListData(res.data?.articles);
          });
          //console.log(res.data.articles);
        }, 7000)
        .catch(err => {
          console.log('Err', err);
          alert(err.message);
        });
    };
    getData();
  }, [onClick]);

  return (
    <View style={styles.container}>
      {loading && (
        <View>
          <ActivityIndicator color="#00ff00" size="large" />
        </View>
      )}
      <FlatList
        data={Category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              onCategoryClick(item, index);
            }}>
            <Text
              style={index === click ? styles.btnTextPress : styles.btnText}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        //ListFooterComponent={FooterComponent}
      />
      <FlatList
        data={
          isExpandable ? flatListData.slice(0, 10) : flatListData.slice(0, 2)
        }
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
  btnTextPress: {
    fontSize: 18,
    marginHorizontal: 10,
    borderRadius: 45,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'orange',
  },
});

export default NewsCard;
