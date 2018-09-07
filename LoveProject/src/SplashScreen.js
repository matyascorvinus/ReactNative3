import React, { Component } from 'react';
import {
  Text,
  View, ImageBackground, Dimensions, TouchableOpacity
} from 'react-native';
import { quote } from './QuoteList.json'
class SplashScreen extends Component {
    state = {}
    randomID(something) { return Math.floor(Math.random() * something.length) }
  
    render() {
      var quoteID = this.randomID(quote)
      return (
  
        <ImageBackground style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width
         ,justifyContent:'flex-end',alignItems:'center'}}
          source={require('./Images/Love-Heart-Background-Wallpaper-Desi11gn3.jpg')}>
          <View style={{width:Dimensions.get('screen').width-10, borderRadius:10, height:100, 
          backgroundColor:'#BE3539',justifyContent:'center',alignItems:'center',opacity:0.8}}>
          <Text style={{fontWeight:'bold'}}>"{quote[quoteID].wise_quote[this.randomID(quote[quoteID].wise_quote)]}"</Text>
          <Text style={{fontWeight:'bold'}}>{quote[quoteID].author}</Text>
          </View>
        </ImageBackground>
      );
    }
}

export default SplashScreen;