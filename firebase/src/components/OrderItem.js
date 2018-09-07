import React, { Component } from 'react';
import {
    Text,
    View, TouchableOpacity
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen, commonStyles } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {delOrder} from '../actions'
import {connect} from 'react-redux'
class OrderItem extends Component {
    state = {}
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 7, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name='trash' size={25} color={primaryColorGreen} onPress={()=>this.props.delOrder(this.props.item.key)}/>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: primaryColorBrown, fontSize: 18, marginHorizontal: 16 }}>{this.props.item.amount}</Text>
                <Text style={{ color: primaryColorBrown, marginHorizontal: 16, flex: 1 }}>{this.props.item.dish}</Text>
                <Text style={{ fontWeight: 'bold', color: primaryColorGreen, fontSize: 18, marginHorizontal: 16 }}>{`${this.props.item.unitPrice*this.props.item.amount}$`}</Text>
            </View>
        );
    }
}

export default connect(null,{delOrder}) (OrderItem);