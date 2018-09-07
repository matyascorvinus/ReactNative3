import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
  View, StyleSheet, Image, Dimensions, TextInput, Platform,
  KeyboardAvoidingView,ActivityIndicator,
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles';
import firebase, { Firebase } from 'react-native-firebase';
class Splash extends Component {
    state = {}
    componentDidMount(){
        
        firebase.auth().onAuthStateChanged(res => res !== null ? setTimeout(()=>this.props.navigation.navigate('Photo'),2000)
        :setTimeout(()=>this.props.navigation.navigate('LoginScreen')),2000)
    }
    render() {
        return (
            <View style={styles.container}><Image source={require('../Images/Wallpaper.jpg')}
                style={{ width: '100%', height: Dimensions.get('screen').width - 60 }}
                resizeMode='contain'
            /></View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1,
        justifyContent: 'center',
        
        padding: 30,
    },
})
export default Splash;