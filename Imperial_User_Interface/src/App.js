
import React, { Component } from 'react';
import { Linking, Alert, StyleSheet, TextInput, Image, View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
import Imperial_List from './Imperial_List'

import { createStackNavigator } from 'react-navigation';
const Navigation = createStackNavigator({
  GameList: {
      screen: Imperial_List,
      navigationOptions: ({ navigation }) => (
          { title: 'Gaming Enterprises' })
  },
  
})

class Empire extends Component {

   state = {}

  


  render() {

    return (

    
      <Navigation/>


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