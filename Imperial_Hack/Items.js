import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import IconChoosing from './IconChoosing'
class Items extends Component {
  state = {}
  render() {
    return (
      <View style={{
        borderRadius: 10, backgroundColor: 'rgba(0, 0, 0,0.5)', flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('screen').width - 10, height: 50, borderRadius: 10
      }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{this.props.date}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{this.props.temp}</Text>
          <IconChoosing weather={this.props.weather} />
        </View>
      </View>
    );
  }
}

export default Items;