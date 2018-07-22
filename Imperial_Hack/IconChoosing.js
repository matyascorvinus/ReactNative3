import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
//learn from fellow countryman Do Huu An
class IconChoosing extends Component {
    state = {}
    render() {

        if (this.props.weather === 'Clear') {
            return (<Image style={{ width: 40, height: 40 }} source={require('./Image/clear.png')} />);
        }
        else if (this.props.weather === 'Clouds') {
            return (<Image style={{ width: 40, height: 40 }} source={require('./Image/clouds.png')} />);
        }
        else if (this.props.weather === 'Rain') {
            return (<Image style={{ width: 40, height: 40 }} source={require('./Image/rain.png')} />);
        }
        else if (this.props.weather === 'Clear') {
            return (<Image style={{ width: 40, height: 40 }} source={require('./Image/snow.png')} />);
        }
        else {
            return (<Image style={{ width: 40, height: 40 }} source={require('./Image/rain.png')} />);
        }

    }
}

export default IconChoosing;