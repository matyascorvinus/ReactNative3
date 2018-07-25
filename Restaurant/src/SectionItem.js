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
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: Dimensions.get('screen').width-10, height: Dimensions.get('screen').height/3,
                flexDirection:'row',alignItems:'center'
            }}
            >
                <Text>{this.props.content.title}</Text>
                <Image source={{ uri: this.props.content.image }}
                    style={{ width: 100, height: 100 }}
                />
            </View>
        );
    }
}

export default SectionItem;