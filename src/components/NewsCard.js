import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Card from './ViewCard';

const NewsCard = () => {
  const Data = [1, 2];
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 5,
    flex: 1,
  },
  category: {
    marginTop: 25,
    marginHorizontal: 10,
    marginLeft: 20,
  },
  btnText: {
    backgroundColor: 'white',
    borderRadius: 50,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default NewsCard;
