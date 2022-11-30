import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ViewCard from './ViewCard';
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
        <View style={Style.container1}>
          <Image
            style={Style.search}
            source={require('../../assets/search.png')}
          />
          <Image
            style={Style.profile}
            source={require('../../assets/profile.png')}
          />

          <TouchableOpacity style={Style.touchstyle}>
            <Text style={Style.myprofile}>{'My Profile'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{}}>
        <Text style={Style.header}>Top News For You</Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 5,
    backgroundColor: 'f4f9f8',
  },
  menu: {
    width: 25,
    height: 20,
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft: 5,
  },
  instep: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 5,
    marginHorizontal: 5,
  },
  container1: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 8,
  },
  search: {
    width: 40,
    height: 25,
    marginLeft: 50,
    resizeMode: 'contain',
  },
  profile: {
    width: 60,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  touchstyle: {
    width: 70,
    height: 40,
    resizeMode: 'contain',
  },
  myprofile: {
    width: 90,
    height: 40,
    fontSize: 18,
    color: 'black',
    resizeMode: 'contain',
    marginLeft: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
  },
  container2: {
    color: 'black',
    fontSize: 5,
    flex: 1,
  },
});
export default IconHeader;
