import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, StyleSheet, Image, Dimensions, TextInput, Platform,
    KeyboardAvoidingView, ActivityIndicator, ImageBackground
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen ,uploadImage} from '../styles';
import { PermissionsAndroid } from 'react-native';
import firebase from 'react-native-firebase';

import RNFetchBlob from 'rn-fetch-blob';
const Blob =RNFetchBlob.polyfill.Blob;

const fs = RNFetchBlob.fs;
window.Blob=Blob;
window.XMLHttpRequest=RNFetchBlob.polyfill.XMLHttpRequest

var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
class Photo extends Component {
    onCamera = () => {
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
                uploadImage(source)
            }
        });
    }
    
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.state.avatarSource} style={{ width: 100, height: 100 }} />
                <TouchableOpacity style={[styles.button, { backgroundColor: 'orange', margin: 30 }]} onPress={this.onCamera}>
                    <Text style={{ color: 'white' }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
      borderRadius: 10,
      height: 40,
      width:150,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
  
    }
})
export default Photo;
