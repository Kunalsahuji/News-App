import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const ViewCard = props => {
  const {item} = props;
  // console.log(item)
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.infoViewStyle}>
        <Text style={styles.topTextStyle} numberOfLines={3}>{item.title}</Text>
        <Text style={styles.bottomTextStyle} numberOfLines={4}>{item.description}</Text>
      </View>
      <View style={styles.descViewStyle}>
        <Image style={styles.image} source={{
            uri: item.urlToImage,
          }}/>
      </View>
    </View>
  );
};

export default ViewCard;

const styles = StyleSheet.create({
  
  infoViewStyle: {
    height: '100%',
    width: '60%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
  },
  parentViewStyle: {
    width: '90%',
    backgroundColor: 'white',
    height: 180,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    padding: 10,
},
  descViewStyle: {
    height: '100%',
    width: '40%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  topTextStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  bottomTextStyle: {
    color: 'black',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5
  }
});
