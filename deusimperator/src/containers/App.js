import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, Image
} from 'react-native';
import PhotoSending from '../components/PhotoSending';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { primaryColorGreen, backgroundColor, primaryColorRed } from '../styles'

//import TabHistory from '../components/TabHistory';
import TabMessage from '../components/TabMessage';

import Icon from 'react-native-vector-icons/Entypo';

import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
const {store,persistor} =configureStore()


const BottomNavigation = createBottomTabNavigator(
  {
    Photo: PhotoSending,
    //History: TabHistory,
    Message: TabMessage
  },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Photo') {
  //         iconName = `photo`;
  //       } else if (routeName === 'History') {
  //         iconName = `history`;
  //       } else if (routeName === 'Info') {
  //         iconName = `info-circle`;
  //       }
  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Icon name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: primaryColorGreen,
  //     inactiveTintColor: 'gray',
  //     style: {
  //       backgroundColor: 'white'
  //     }
  //   },
  // }
)
const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomNavigation,



})
console.disableYellowBox = true;
class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <SwitchNavigation />
        </PersistGate>
       </Provider>
    );
  }
}

export default App;