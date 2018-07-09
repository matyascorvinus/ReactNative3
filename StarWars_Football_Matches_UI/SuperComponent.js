import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry} from 'react-native';
class SuperComponent extends Component {
  state = {  }
  render() {
    return (
        <View style = {styleEmpire.bigMatch}> 
        <View style = {styleEmpire.match} >
              <Text style = {styleEmpire.timer}> {this.props.time} </Text>
              <View style = {styleEmpire.teams} >
                <Text style = {styleEmpire.normalFont}> {this.props.name1} </Text>
                <Image style= {{width:20, height:20}} source = {this.props.source1}/>
                
                <Image style= {{width:20, height:20}} source = {this.props.source2}/>
                <Text style = {styleEmpire.normalFont}> {this.props.name2} </Text>
              </View>
        </View>
      </View>
    );
  }
}
const styleEmpire = StyleSheet.create({
   
    normalFont:
    {
      color: 'white',
      fontSize: 15,
      textAlign: 'center'
    },
    match:
    {
      flexDirection: 'row',
      height: 80,
      width: 350,
      backgroundColor: 'rgb(116,15,15)',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 10,
     
    }, 
    bigMatch:
    {
      height: 100,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
     timer: {
      color: 'white',
      fontSize: 14,
      
    },
     teams: {
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  });
  
export default SuperComponent;