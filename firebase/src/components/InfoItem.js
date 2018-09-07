import React, { Component } from 'react';
import {
  Text,
  View,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen, commonStyles } from '../styles';
import firebase from 'react-native-firebase';
class InfoItem extends Component {
  state = { content: this.props.content }
  onPushUserDataToFirebase(){
    firebase.database().ref('/users').child(firebase.auth().currentUser.uid).child(this.props.type).set(this.state.content)
  }
  componentWillReceiveProps(newProps){
    this.setState({content:newProps.content},()=>console.log(newProps))
  }
  render() {
    return (
        <View style={{flexDirection:'row',marginVertical:5}}>
          <Icon name ={this.props.iconName} size={25} color={primaryColorGreen} style={{marginLeft:7}}/>
          <TextInput style={{flex:1,color:primaryColorBrown}} autoCorrect={false}
          defaultValue={this.state.content} placeholder='Enter your information' //onChangeText={(content)=>this.setState({content})}
          onSubmitEditing={(event)=> this.setState({content:event.nativeEvent.text}, ()=>this.onPushUserDataToFirebase())}
          />
        </View>
    );
  }
}

export default InfoItem;