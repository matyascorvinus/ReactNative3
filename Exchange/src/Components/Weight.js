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
        name: 'Gam',
        toMeter: 0.001,
        shorten: 'g'
    },
    {
        name: 'Decagam',
        toMeter: 0.01,
        shorten: 'dag'
    },
    {
        name: 'Hectogam',
        toMeter: 0.1,
        shorten: 'hg'
    },
    {
        name: 'Kilogam',
        toMeter: 1,
        shorten: 'kg'
    },
    {
        name: 'Ton',
        toMeter: 1000,
        shorten: 't'
    }]
class Weight extends Component {
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
                        // value={String(
                        //     this.props.PressChanger.left / this.props.PressChanger.right * this.props.RightText
                        // )}
                        onChangeText={(text) => this.props.onLeftText(text)} />
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => this.renderItemLeft({ item, index })}

                    />
                </View>
                <View style={{ flex: 0.5 }}>
                    <TextInput
                        autoCorrect={false}

                        onChangeText={(text) => this.props.onRightText(text)}
                        value={String(
                            this.props.PressChanger.left / this.props.PressChanger.right * this.props.LeftText
                        )} />
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
export default connect(mapStateToProps, actions)(Weight);