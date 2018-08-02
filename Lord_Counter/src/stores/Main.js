import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity, ImageBackground, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Counter from './Counter';
class Main extends Component {
    state = {}
    handleIncrease = () => {
        this.props.plusIncrease();
    };

    handleDecrease = () => {
        this.props.minusDecrease();
    };

    render() {
        return (
            <ImageBackground source={require('./hungarian_turul_design_by_teamslinky-d4ylafh.jpg')} style={{
                width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 100,
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
            >
                <TouchableOpacity style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: Dimensions.get('screen').width / 2, height: Dimensions.get('screen').height / 10,
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10
                }}
                onPress={this.handleIncrease}
                >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Plus</Text>
                </TouchableOpacity>
                    <Counter/>

                <TouchableOpacity style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    width: Dimensions.get('screen').width / 2, height: Dimensions.get('screen').height / 10,
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10
                }}
                onPress={this.handleDecrease}
                >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Minus</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
export default connect(null, actions)(Main);
//export default Main;