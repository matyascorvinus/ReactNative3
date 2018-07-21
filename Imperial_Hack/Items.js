import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

class Items extends Component {
  state = {}
  render() {
    return (
      <View style={{ borderRadius: 10, backgroundColor: 'rgb(46, 44, 61)', flexDirection: 'row', 
      justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('screen').width - 100, height: 50,borderRadius:10 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{this.props.date}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{this.props.temp}</Text>
          <Image style={{ width: 40, height: 40 }} source={require('./Image/clear.png')} />
        </View>
      </View>
    );
  }
}

export default Items;