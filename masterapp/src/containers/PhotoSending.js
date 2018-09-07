import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, StyleSheet, Image, Dimensions, TextInput, Platform,
    KeyboardAvoidingView, ActivityIndicator, ImageBackground
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles';
import Photo from '../components/Photo';
import { PermissionsAndroid } from 'react-native';
import firebase from 'react-native-firebase';

class PhotoSending extends Component {
    state = {}
    
 
    render() {
        return (

            <ImageBackground source={require('../Images/Emperor.jpg')}
                style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row', flexWrap:'wrap'}}>
                    <Photo title='Chụp ảnh chỉ tay phải' />
                    <Photo title='Chụp ảnh chỉ tay trái' />
                    <Photo title='Chụp ảnh mặt trước' />
                    <Photo title='Chụp ảnh mặt trái' />
                    <Photo title='Chụp ảnh mặt phải' />
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'orange', margin: 30 }]} onPress={this.onCamera}>
                    <Text style={{ color: 'white',fontWeight:'bold' ,fontSize:23}}>Thỉnh thầy</Text>
                </TouchableOpacity>
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,

        justifyContent: 'center',


    },
    button: {
        borderRadius: 10,
        height: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,

    }
})
export default PhotoSending;