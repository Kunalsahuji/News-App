import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import {StackActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const loginData = async () => {
      const stayLogin = await AsyncStorage.getItem('LOGIN');
      if (stayLogin !== null) {
        navigation.dispatch(StackActions.replace('HomeScreen'));
      } else {
        navigation.navigate('Login');
      }
    };
    loginData();
  }, []);
  const handleSubmit = () => {
    if (email && password) {
      let payload = {email: email, password: password};
      axios
        .post('https://reqres.in/api/login', payload)
        .then(async res => {
          //console.log(res.data);
          try {
            await AsyncStorage.setItem('LOGIN_DATA', JSON.stringify(payload));
            await AsyncStorage.setItem('LOGIN', res.data.token);
            console.log('token', res.data.token);
            alert('Login successfully');
            navigation.dispatch(StackActions.replace('HomeScreen'));
          } catch (error) {
            alert('Failed to save the data to the storage');
          }
        })
        .catch(err => {
          console.log('Err', err);
          alert(err.response.data.error);
        });
    } else {
      alert('please fill data');
    }
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png',
          }}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.mainHeader}>Welcome to Instep News</Text>
        <Text style={styles.signinText}>Sign IN</Text>
        <View style={styles.inputContainerMail}>
          <Text style={styles.lablesEmail}>Enter your Email id</Text>
          <TextInput
            style={styles.inputStyleMail}
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            value={email}
            textContentType="email"
          />
        </View>
        <View style={styles.inputContainerPass}>
          <Text style={styles.lablesPass}>Enter your password</Text>
          <TextInput
            style={styles.inputStylePass}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={password => setPassword(password)}
            autoCorrect={false}
            value={password}
          />
        </View>
        <View style={styles.wrapper}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={toggleCheckBox => setToggleCheckBox(toggleCheckBox)}
          />
          <Text style={styles.wrapperText}>Remember Me</Text>
        </View>
        <TouchableOpacity style={[styles.buttonStyle]} onPress={handleSubmit}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    top: 10,
  },
  wrapperText: {
    color: 'black',
    textAlign: 'center',
    marginRight: 150,
    bottom: 28,
    fontSize: 17,
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
