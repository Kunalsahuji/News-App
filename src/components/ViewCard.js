import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const Card = props => {
  const {item} = props;
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.infoViewStyle}>
        <Text style={styles.topTextStyle}>{"Ind vs Eng Tests to be played in front of crowd"}</Text>
        <Text style={styles.bottomTextStyle}>{"The 5-test series between India and England"}</Text>
      </View>
      <View style={styles.descViewStyle}>
        <Image style={styles.image} source={{
            uri: 'https://png.pngitem.com/pimgs/s/192-1924293_virat-kohli-hd-png-download.png',
          }}/>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  parentViewStyle: {
    width: '90%',
    backgroundColor: 'white',
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    padding: 10,
  },
  infoViewStyle: {
    height: '100%',
    width: '60%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
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
    fontSize: 14,
  },
  bottomTextStyle: {
    color: 'black',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5
  }
});
