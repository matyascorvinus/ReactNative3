
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity, ImageBackground, Dimensions
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers';
const store = createStore(rootReducer)

import Main from './Main';
class App extends Component {
  state = {}
  render() {
    return (
     <Provider store={store}>
      <Main/>
     </Provider>
     
    );
  }
}

export default App;