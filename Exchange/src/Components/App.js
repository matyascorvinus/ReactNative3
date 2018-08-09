import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Screen from './Screen';
import Length from './Length';
import Weight from './Weight';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { } from '../reducers'


import rootReducer from '../reducers';
const store = createStore(rootReducer)

const Navigation = createStackNavigator({
  HomeScreen: {
    screen: Screen
  },
  length: {
    screen: Length
  },
  weight: {
    screen: Weight
  }
})
class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;