import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, Image, FlatList, TextInput
} from 'react-native';

import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import TabMenu from '../components/TabMenu';
import TabOrder from '../components/TabOrder';
import TabHistory from '../components/TabHistory';
import TabInfo from '../components/TabInfo';

import {history} from '../deusimperator-e9d95-export.json'
import HistoryItem from '../components/HistoryItem'
import firebase from 'react-native-firebase';
// const BottomNavigation = createBottomTabNavigator({
//   Menu:TabMenu,
//   Order: TabOrder,
//   History: TabHistory,
//   Info: TabInfo
// })

// const SwitchNavigation = createSwitchNavigator({
//   HomeScreen: BottomNavigation,  
// })

const userAccounts = ['FqzG2xpxQSVwaZjVmtmtaUHmhzh2', 'o1vP3xjbJAhM0wyXgJFi5T8Nm7W2']
console.disableYellowBox = true;
class App extends Component {
  componentDidMount() {
    this.loadHistoriesByUsers()
  }
  loadHistoriesByUsers = () => {
    firebase.database().ref(`users/history`).on('value', res => this.setState({ histories: res._value }))
  }
  renderItem = ({ item }) => <HistoryItem history={item} />
  state = {
    histories: [],    
  }
  
  render() {
    console.log(this.state.userAccount)
    return (
      // <SwitchNavigation/>
      <View>
        <FlatList
          style={{ flexGrow: 0 }}
          data={this.state.histories}
          keyExtractor={(item) => item.key.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default App;