import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png',
        }}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.mainHeader}>Welcome to Instep News</Text>

      <Text style={styles.text2}> Sign IN</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter your username</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.push('HomeScreen')}>
        <Text style={styles.Text1}>Login</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  mainHeader: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'center',
    marginTop: 10,
    fontFamily: 'bold',
    textAlign: 'center',
  },

  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    fontFamily: 'regular',
    fontSize: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    marginTop: 40,
    margin: 80,
    padding: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  Text1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 300,
    height: 220,
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
