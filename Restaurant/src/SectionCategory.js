import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class SectionCategory extends Component {
  state = {  }
  render() {
    return (
        <View>
            <Text>{this.props.category}</Text>
        </View>
    );
  }
}

export default SectionCategory;