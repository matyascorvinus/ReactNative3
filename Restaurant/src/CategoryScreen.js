import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, ImageBackground, Dimensions
} from 'react-native';

class CategoryScreen extends Component {
    state = {}
    render() {
        return (
            <ImageBackground source={require('./Images/hungarian_turul_design_by_teamslinky-d4ylafh.jpg')}
                style={{
                    width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 100,
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }}

            >
                <TouchableOpacity style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: Dimensions.get('screen').width / 2, height: Dimensions.get('screen').height / 10,
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}
                    onPress={() => {
                        this.props.navigation.navigate('SectionScreen');
                    }}
                >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Emperor's Meals</Text>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

export default CategoryScreen;