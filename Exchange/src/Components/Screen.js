import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity

} from 'react-native';

class Screen extends Component {
  state = {}
  render() {
    return (

      <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{height: 100,width:300,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate('length')}
        >
          <Text style={{fontSize:20,fontWeight:'bold'}}>Length</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{height: 100,width:300,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}
        onPress={()=>this.props.navigation.navigate('weight')}
        >
          <Text style={{fontSize:20,fontWeight:'bold'}}>Weight</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Screen;