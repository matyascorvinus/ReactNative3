import React, { Component } from 'react';
import {
    Text,
    View, ImageBackground, Dimensions, TouchableOpacity
} from 'react-native';

class ChoosingScreen extends Component {
    state = {}
    render() {
        return (
            <ImageBackground resizeMode='contain' style={{
                height: Dimensions.get('screen').height, width: Dimensions.get('screen').width
                , justifyContent: 'flex-end', alignItems: 'center'
            }}
                source={require('./Images/wallpapers_1920_1200_love_design_6_6877.jpg')}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity style={{
                        width: 200, height: 100, backgroundColor: '#BE3539',
                        justifyContent: 'center', alignItems: 'center', opacity: 0.8, borderRadius: 10, marginRight: 10
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 200, height: 100, backgroundColor: '#BE3539',
                        justifyContent: 'center', alignItems: 'center', opacity: 0.8, borderRadius: 10
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity
                        style={{
                            width: 200, height: 100, backgroundColor: '#BE3539', justifyContent: 'center',
                            alignItems: 'center', opacity: 0.8, borderRadius: 10, marginRight: 10
                        }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 200, height: 100, backgroundColor: '#BE3539',
                        justifyContent: 'center', alignItems: 'center', opacity: 0.8, borderRadius: 10
                    }}>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default ChoosingScreen;