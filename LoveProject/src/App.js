import React, { Component } from 'react';
import {
  Text,
  View, ImageBackground, Dimensions, TouchableOpacity
} from 'react-native';
import { quote } from './QuoteList.json';
import SplashScreen from './SplashScreen';
import { createSwitchNavigator } from 'react-navigation';
import ChoosingScreen from './ChoosingScrenn';
const Navigation = createSwitchNavigator({
  Choose: ChoosingScreen,
  SplashScreen: SplashScreen,
  
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