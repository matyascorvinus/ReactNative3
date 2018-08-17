import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
  View, StyleSheet, Image, Dimensions, TextInput, Platform,
  KeyboardAvoidingView,ActivityIndicator,
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles';
class Splash extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}><Image source={require('../assets/logo_app.jpg')}
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