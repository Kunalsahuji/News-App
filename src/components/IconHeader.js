import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from './ViewCard';

const IconHeader = () => {
  const Data = ['All', 'Technology', 'Sports', 'Health'];
  return (
    <View>
      <View style={Style.container}>
        <Image
          style={Style.menu}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4543/4543046.png',
          }}
        />
        <Image
          style={Style.instep}
          source={require('../../assets/instep.png')}
        />
        <View style={Style.container2}>
          <Image
            style={Style.search}
            source={require('../../assets/search.png')}
          />
          {/* image */}
          <Image
            style={Style.profile}
            source={require('../../assets/profile.png')}
          />
          <TouchableOpacity style={Style.touchstyle}>
            <Text style={Style.touchtext}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{}}>
        <Text style={Style.header}>Top News For You</Text>
      </View>
      <View style={Style.container1}>
        <FlatList
          horizontal={true}
          data={Data}
          renderItem={({item}) => {
            return(
            <Card item={item} />
            );
          }}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  instep: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  container2: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 5,
  },
  search: {
    width: 70,
    height: 35,
    marginLeft: 25,
    resizeMode: 'contain',
  },
  profile: {
    width: 70,
    height: 35,
    resizeMode: 'contain',
  },
  myprofile: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  touchstyle: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  touchtext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  container1: {
    color: 'black',
    fontSize: 5,
    flex: 1,
  },
});
export default IconHeader;
