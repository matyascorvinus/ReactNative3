import React, { Component } from 'react';
import {
  Text,
  View,StyleSheet,Image
} from 'react-native';
import Splash from './Splash';
import LoginScreen from './LoginScreen'
import {createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo'
const BottomNavigation = createBottomTabNavigator({
  Menu:TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
})
const SwitchNavigation = createSwitchNavigator({
  HomeScreen: BottomNavigation,
  Splash: Splash,
  LoginScreen: LoginScreen,
  
})
class App extends Component {
  state = {}
  render() {
    return (    
      <SwitchNavigation/>  
    );
  }
}

export default App;