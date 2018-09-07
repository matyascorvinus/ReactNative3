import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, StyleSheet, Image
} from 'react-native';

import firebase from 'react-native-firebase';

import RNFetchBlob from 'rn-fetch-blob';
const Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob


const sessionID = new Date().getTime()
const imageRef = firebase.storage().ref('/Pictures/Destiny').child(`${sessionID}`);
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
        ImagePicker.showImagePicker(options, (response) => {
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
                    avatarSource: source,haveImage:true
                });
                
                imageRef.put(response.uri, { contentType: 'image/jpg'});
             
            
                    
            }
        });
    }

    state = {haveImage:false}
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.state.haveImage === false ? require('../Images/ss_0648e0e2887ae759f7ec32b47fe132942866b0c5.1920x1080.jpg'): this.state.avatarSource} style={{ width: 120, height: 100 }} />
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
        alignItems:'center'
    },
    button: {
        borderRadius: 10,
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,

    }
})
export default Photo;


