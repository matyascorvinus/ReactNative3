import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, Image
} from 'react-native';
import Splash from './Splash';
import LoginScreen from './LoginScreen'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import { primaryColorGreen, backgroundColor, primaryColorRed } from '../styles'

import Icon from 'react-native-vector-icons/FontAwesome';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import IconWithNoti from './IconWithNoti';
const {store,persistor} =configureStore()
const BottomNavigation = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        }
        else if (routeName === 'History') {
          iconName = `history`;
        }
        else if (routeName === 'Info') {
          iconName = `info-circle`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <IconWithNoti iconName={iconName} routeName={routeName} tintColor={tintColor}/>
      },
      tabBarOptions: {
        activeTintColor: primaryColorGreen,
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white'
        }
      },
    }),
  })
const SwitchNavigation = createSwitchNavigator({
  Splash: Splash,
  HomeScreen: BottomNavigation,

  LoginScreen: LoginScreen,

})
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