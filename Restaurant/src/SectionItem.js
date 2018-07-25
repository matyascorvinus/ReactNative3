import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

class SectionItem extends Component {
    state = {}
    render() {
        return (
            <View style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: Dimensions.get('screen').width - 10, height: Dimensions.get('screen').height / 3 + 100,
                flexDirection: 'column', alignItems: 'center'
            }}
            >
                <Image source={{ uri: this.props.content.image }}
                    style={{ width: Dimensions.get('screen').width , 
                    height: Dimensions.get('screen').height / 3, marginBottom: 10,
                    borderRadius:10
                 }}
                />
                <View style={{
                    flexDirection: 'column', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10,
                    width: Dimensions.get('screen').width / 2, height: 60,
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{this.props.content.title}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Rate:{this.props.content.rate}</Text>
                </View>
            </View>
        );
    }
}

export default SectionItem;