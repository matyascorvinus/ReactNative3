import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import SectionScreen from './SectionScreen';
import { createStackNavigator } from 'react-navigation';
import CategoryScreen from './CategoryScreen';
const Navigation = createStackNavigator({
    HomeScreen:{
      screen: CategoryScreen,
    },

    SectionScreen:{
      screen: SectionScreen,
    }
})


class App extends Component {
  state = {}

  render() {

    return (
      <Navigation/>
    );
  }
}

export default App;