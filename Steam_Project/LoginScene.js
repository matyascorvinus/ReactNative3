import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

class LoginScene extends Component {
    state = {}
    render() {
        return (
            <ImageBackground source={require('./steam.jpg')} style={stylist.img}>

                <View style={stylist.back}>
                    <TextInput
                        style={stylist.input}
                        editable={true}
                        placeholder='               Player Identity'
                        placeholderTextColor='black'
                        autoCapitalize="none"
                        
                        autoCorrect={false}
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <View style={{ height: 20 }} />
                    <TouchableOpacity style={stylist.button}>
                        <Text style={stylist.text}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ height: 50 }} />
                </View>
            </ImageBackground>
        );
    }
}

const stylist = StyleSheet.create({
    back:
    {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cover: {
        width: Dimensions.get('window').width - 100,
        height: 700,
        resizeMode: 'contain',
    },
    img:
    {
        justifyContent: 'center',//flex-end, flex-start, center, space-around, space-between
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        resizeMode: 'contain',

    },
    input:
    {
        width: 200,
        height: 40,
        backgroundColor: 'rgba(254,254,254,1)',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: 'rgba(254,254,254,1)',
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,

    },
})
const bg = {
    uri: 'https://mfiles.alphacoders.com/580/580645.jpg'

}
export default LoginScene;