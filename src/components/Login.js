import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
const Login = (navigation) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    if (email && pass) {
      let payload = {email: email, pass: pass};

      axios
        .post('https://reqres.in/api/login', payload)
        .then(async res => {
          console.log(res.data);
          try {
            await AsyncStorage.setItem('LOGIN_DATA', JSON.stringify(payload));
            alert('Data successfully saved');
          } catch (error) {
            alert('Failed to save the data to the storage');
          }
        })
        .catch(err => {
          console.log('Err', err);
          alert(err);
        });
    } else {
      alert('please fill data');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png',
          }}
          resizeMode="center"
          style={styles.image}
        />

        <Text style={styles.mainHeader}>Welcome to Instep News</Text>

        <Text style={styles.signinText}> Sign IN</Text>
        <View style={styles.inputContainerMail}>
          <Text style={styles.lablesEmail}>Enter your Email id</Text>
          <TextInput
            style={styles.inputStyleMail}
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            value={email}
          />
        </View>
        <View style={styles.inputContainerPass}>
          <Text style={styles.lablesPass}>Enter your password</Text>
          <TextInput
            style={styles.inputStylePass}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={pass => setPass(pass)}
            autoCorrect={false}
            value={pass}
          />
        </View>
        <View style={styles.wrapper}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={toggleCheckBox =>
              setToggleCheckBox(toggleCheckBox)
            }
            color={toggleCheckBox ? '#4630EB' : undefined}
          />
          <Text style={styles.wrapperText}>Remember Me</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {backgroundColor: toggleCheckBox ? '#4630EB' : 'grey'},
          ]}
          disabled={!toggleCheckBox}
          onPress={handleSubmit}
          /* onPress= { () => Navigation.push('HomeScreen')} */
          >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'f4f9f8',
  },
  image: {
    width: '100%',
    height: '30%',
  },
  mainHeader: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'center',
    marginTop: 5,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  signinText: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },

  inputContainerMail: {
    marginTop: 20,
    lineHeight: 25,
  },

  lablesEmail: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    //lineHeight: 30,
    fontFamily: 'regular',
    fontSize: 20,
  },
  inputStyleMail: {
    borderWidth: 2,
    borderColor: 'grey',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
  },
  inputContainerPass: {
    marginTop: 10,
    lineHeight: 25,
  },
  lablesPass: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    fontFamily: 'regular',
    fontSize: 20,
  },
  inputStylePass: {
    borderWidth: 2,
    borderColor: 'grey',
    fontSize: 16,
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
  wrapper: {
    //marginLeft:5,
    top: 10,
  },
  wrapperText: {
    color: 'black',
    textAlign: 'center',
    marginRight: 150,
    bottom: 28,
    fontSize: 17,
    //fontWeight:'bold',
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
