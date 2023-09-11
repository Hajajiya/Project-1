import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class jiya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    const {username, password} = this.state;
    const {navigation} = this.props;
    if (username === 'name' && password === '1111') {
      Alert.alert('Login Successful', 'Welcome back!');
      navigation.navigate('about');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  render() {
    const {username, password} = this.state;
    console.log('haj');
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={{
            uri: 'https://www.whoa.in/201604-Whoa/10-cool-funny-images-mobile-wallpapers-hd-wallpapers-for-mobiles.jpeg',
          }} // Replace with your image source
          style={styles.imageBackground}>
          <View style={styles.overlay}>
            <TextInput
              placeholder="Username"
              onChangeText={text => this.setState({username: text})}
              value={username}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              onChangeText={text => this.setState({password: text})}
              value={password}
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => {
                // this.handleLogin();
                navigation.navigate('about');
              }}>
              <Text>{'Login'}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'Transparent',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 500,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default jiya;
