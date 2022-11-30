import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import {FlatList} from 'react-native-gesture-handler';

const FooterComponent = props => {
  const {isExpandable, ShowMoreBtn} = props;
return (
    <View style={styles.mainContainer}>
      <View style={styles.ShowMoreBtn}>
        <TouchableOpacity onPress={ShowMoreBtn}>
          <Text style={styles.ShowMoreText}>
            {isExpandable ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <SubscribeCardComponent />
      </View>
      <View />
      <View style={styles.bottomText}>
        <Text style = {styles.bottomAster}>@Aster News,2022</Text>
        <Text style = {styles.bottomPrivacy}>Privacy Policy</Text>
        <Text style = {styles.bottomTerms}>Terms of services</Text>
      </View> */}
    </View>
  );
};

const SubscribeCardComponent = () => {
  return (
    <View style={styles.subscribeMainCard}>
      <Text style={styles.SubscribeCardText}>Subscribe to our newsletter</Text>
      <TextInput placeholder="Enter Email" style={styles.SubscribeCardEmail} />
      <TouchableOpacity style={styles.SubscribeCardBtn}>
        <Text style={styles.SubscribeCardBtnText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f4f9f8',
  },
  ShowMoreBtn: {
    width: '40%',
    height: 50,
    borderWidth: 2,
    borderColor: 'grey',
    marginVertical: '5%',
    alignItems: 'center',
    backgroundColor: '#f4f9f8',
    marginHorizontal: '30%',
    padding: 12,
    borderRadius: 5,
    borderBottomColor: 'black',
    margin: 20,
    marginTop: 15,
  },
  ShowMoreText: {
    color: 'black',
  },
  subscribeMainCard: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 10,
  },
  SubscribeCardText: {
    color: 'black',
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 35,
    paddingVertical: 7,
  },
  SubscribeCardEmail: {
    backgroundColor: '#f2f3f3',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 13,
    height: 35,
    margin: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  SubscribeCardBtn: {
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
    backgroundColor: '#e37626',
    height: 35,
    borderRadius: 1,
  },
  SubscribeCardBtnText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 15,
  },
  //   bottomAster: {
  //     fontSize:13,
  //     //fontWeight: 'normal',
  //     //color: 'black',
  //   },
  //   bottomPrivacy: {
  //     fontSize:13,
  //     //fontWeight: 'normal',
  //     //color: 'black',
  //   },
  //   bottomTerms: {
  //     fontSize:13,
  //     //fontWeight: 'normal',
  //     //color: 'black',
  //   },
});
export default FooterComponent;
