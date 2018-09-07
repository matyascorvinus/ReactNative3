import React, { Component } from 'react';
import {
  Text,
  View,StyleSheet,Image
} from 'react-native';
import PhotoSending from './PhotoSending';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen'
import {createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import TabMenu from '../components/TabMenu';
import TabOrder from '../components/TabOrder';
import TabHistory from '../components/TabHistory';
import TabInfo from '../components/TabInfo';

const BottomNavigation = createBottomTabNavigator({
  Menu:TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
})
const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  Photo: PhotoSending,
  LoginScreen: LoginScreen,
  //HomeScreen: BottomNavigation,
  
  
  
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