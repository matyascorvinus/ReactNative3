
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

const bg = {
  uri: 'https://mfiles.alphacoders.com/580/580645.jpg'
}
export default Empire;