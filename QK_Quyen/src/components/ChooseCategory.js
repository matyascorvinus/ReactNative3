import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { gray, categoryBirthday, white, categoryPersonal, categoryTodo, categoryShopping, categoryEvent } from '../styles';
class ChooseCategory extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={{
                width: 100, height: 100, backgroundColor: this.props.category === 'Personal' ? categoryPersonal :
                    (this.props.category === 'To do' ? categoryTodo : (this.props.category === 'Shopping' ? categoryShopping :
                        (this.props.category === 'Birthday' ? categoryBirthday :
                            (this.props.category === 'Event' ? categoryEvent : 'red')))),
                justifyContent: 'center', alignItems: 'center',borderRadius:10,margin:5
            }}>
                <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{this.props.category} </Text>
            </TouchableOpacity>
        );
    }
}

export default ChooseCategory;