import React, { Component } from 'react';
import {
    Text,
    View, FlatList,
    TouchableOpacity
} from 'react-native';
import * as actions from '../actions'
import { connect } from 'react-redux';
class Item extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={{ height: 100, backgroundColor: this.props.index % 2 === 1 ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {

                    this.props.left === true ?
                        this.props.press(this.props.data.toMeter, this.props.PressChanger.right)
                        : this.props.press(this.props.PressChanger.left, this.props.data.toMeter)
                }}
            >
                <Text style={{
                    fontSize: 18, fontWeight: 'bold', color: this.props.left === true ? this.props.PressChanger.left === this.props.data.toMeter ? 'red' : 'white'
                        : this.props.PressChanger.right === this.props.data.toMeter ? 'red' : 'white',
                }}>{this.props.title}</Text>
            </TouchableOpacity>

        );
    }
}


const mapStateToProps = ({ PressChanger }) => ({PressChanger })
export default connect(mapStateToProps, actions)(Item);