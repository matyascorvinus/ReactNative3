import React, { Component } from 'react';
import {
    Text,
    View, Image, Dimensions, TouchableOpacity
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen, commonStyles } from '../styles';
import {connect} from 'react-redux';
import {addOrder} from '../actions'
class DishItem extends Component {
    state = {}

    addToCart = () =>{
        this.props.addOrder(this.props.dish)
    }
    render() {
        return (
            <View style={{ width: '50%', marginVertical: 15, padding: 5, alignItems: 'center' }}>
                <Image
                    style={{
                        borderRadius: 75,
                        height: 150,
                        width: 150
                    }}
                    source={{ uri: this.props.dish.image }}
                />
                <Text
                    style={{ marginTop: 5, color: primaryColorBrown, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}
                    numberOfLines={1}>
                    {this.props.dish.name}
                 </Text>
                <Text style={{ marginTop: 5, color: primaryColorBrown, fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                {`${this.props.dish.price}$`}</Text>
                <TouchableOpacity style={[commonStyles.button,{backgroundColor:primaryColorRed}]} onPress={this.addToCart}>
                    <Text style={{color:'white'}}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect (null,{addOrder})(DishItem);