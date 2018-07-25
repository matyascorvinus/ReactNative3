import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class SectionCategory extends Component {
  state = {  }
  render() {
    return (
        <View style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            flex: 1,
            flexDirection:'row',alignItems:'center',justifyContent:'center'
        }}>
            <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>{this.props.category}</Text>
            
        </View>
    );
  }
}

export default SectionCategory;