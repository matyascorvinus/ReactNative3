import React, { Component } from 'react';
import {
    Text,
    View, FlatList,
    TextInput, Dimensions
} from 'react-native';
import * as actions from '../actions'
import { connect } from 'react-redux';
import Item from './Item';
const data = [
    {
        name: 'Millimeter',
        toMeter: 0.001,
        shorten: 'mm'
    },
    {
        name: 'Centimeter',
        toMeter: 0.01,
        shorten: 'cm'
    },
    {
        name: 'Decimeter',
        toMeter: 0.1,
        shorten: 'dm'
    },
    {
        name: 'Meter',
        toMeter: 1,
        shorten: 'm'
    },
    {
        name: 'Decameter',
        toMeter: 10,
        shorten: 'dam'
    },
    {
        name: 'Hectometer',
        toMeter: 100,
        shorten: 'hm'
    },
    {
        name: 'Kilometer',
        toMeter: 1000,
        shorten: 'km'
    }]
class Length extends Component {
    state = {}
    renderItemLeft = ({ item, index }) => (
        <Item
            data={item}
            title={item.name}
            index={index}
            left={true}
        />
    );

    renderItemRight = ({ item, index }) => (
        <Item
            data={item}
            title={item.name}
            index={index}
            left={false}
        />
    );
    render() {
        console.log(this.props.PressChanger)
        console.log(this.props.LeftText)
        console.log(this.props.RightText)
        return (

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 0.5 }}>
                    <TextInput
                        autoCorrect={false}
                        value={String(
                            this.props.PressChanger.left / this.props.PressChanger.right * this.props.RightText
                        )}
                        onChangeText={(text) => this.props.onLeftText(text)} />
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => this.renderItemLeft({ item, index })}

                    />
                </View>
                <View style={{ flex: 0.5 }}>
                    <TextInput
                        autoCorrect={false}
                        value={String(
                            this.props.PressChanger.left / this.props.PressChanger.right * this.props.LeftText
                        )}
                        onChangeText={(text) => this.props.onRightText(text)} />
                    <FlatList
                        data={data}
                        renderItem={this.renderItemRight}
                    />
                </View>
            </View>
        );
    }
}
const mapStateToProps = (store) =>
    ({ LeftText: store.LeftText, RightText: store.RightText, PressChanger: store.PressChanger })
export default connect(mapStateToProps, actions)(Length);