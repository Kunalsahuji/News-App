import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
});
export default FooterComponent;
