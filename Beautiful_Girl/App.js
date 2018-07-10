import React, { Component } from 'react';
import { Linking, Alert, StyleSheet, TextInput, Image, View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
class Empire extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  LoginFunction() {

    if (this.state.username == 'DQE' && this.state.password == '123456') {
      Linking.openURL('https://www.facebook.com/photo.php?fbid=1254151781288978&set=a.258915464145953.54637.100000825059170&type=3&theater')
    }
    else {
      return Alert.alert(`Buy Dota Plus please`)
    }

  }

  render() {

    return (

      <ImageBackground source={bg} style={stylist.img}>

        <View style={stylist.back}>
          <Image source={{ uri: 'https://i.imgur.com/2arWHb0.png' }} style={stylist.cover} />
          <TextInput
            style={stylist.input}
            editable={true}
            placeholder='  Username'
            placeholderTextColor='white'
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(username) => this.setState({ username })}

          // onChangeText = {
          //   function abc(username){
          //     return this.setState({username})
          //   }
          // }
          />
          <View style={{ height: 20 }} />

          <TextInput

            style={stylist.input}
            editable={true}
            placeholder='  Password'
            placeholderTextColor='white'
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true}

          />
          <View style={{ height: 20 }} />
          <TouchableOpacity style={stylist.button}
            onPress={() => this.LoginFunction()}>
            <Text style={stylist.text}>Login</Text>
          </TouchableOpacity>
          <View style={{ height: 50 }} />
        </View>
      </ImageBackground>


    );
  }
}
const stylist = StyleSheet.create({
  back:
  {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cover: {
    width: Dimensions.get('window').width - 100,
    height: 700,
    resizeMode: 'contain',
  },
  img:
  {
    justifyContent: 'flex-end',//flex-end, flex-start, center, space-around, space-between
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',

  },
  input:
  {
    width: 200,
    height: 40,
    backgroundColor: 'rgb(110,42,26)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'rgb(110,42,26)',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
})
const bg = {
  uri: 'https://mfiles.alphacoders.com/580/580645.jpg'
}
export default Empire;