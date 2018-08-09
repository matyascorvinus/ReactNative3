import React, { Component } from 'react';
import {
    Text,
    View, FlatList,
    TextInput,Dimensions
} from 'react-native';
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
    renderItem = ({item,index}) => (
        <Item
          title={item.name}
          index = {index}
        />
      );
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{flex:0.5}}>
                    <TextInput style={{ borderRadius: 10, height: 50 }}></TextInput>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        
                    />
                </View>
                <View style={{flex:0.5}}>
                    <TextInput style={{ borderRadius: 10, height: 50 }}></TextInput>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

export default Weight;