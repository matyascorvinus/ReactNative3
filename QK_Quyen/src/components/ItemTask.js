import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { gray, categoryBirthday, white, categoryPersonal, categoryTodo, categoryShopping, categoryEvent } from '../styles';
import RoundCheckbox from 'rn-round-checkbox';
class ItemTask extends Component {
    state = {}

    render() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20, alignItems: 'center' }}>
                <RoundCheckbox />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginStart: 10 }}>{this.props.task.time}</Text>
                <TouchableOpacity style={{
                    flex: 1, borderRadius: 10,
                    backgroundColor: this.props.task.category === 'Personal' ? categoryPersonal :
                        (this.props.task.category === 'To do' ? categoryTodo : (this.props.task.category === 'Shopping' ? categoryShopping :
                            (this.props.task.category === 'Birthday' ? categoryBirthday :
                                (this.props.task.category === 'Event' ? categoryEvent : 'red')))),
                    marginStart: 10, padding: 15
                }}>
                    <Text style={{ fontSize: 16, color: white, fontWeight: 'bold' }}>{this.props.task.content}</Text>
                    <Text style={{ fontSize: 12, color: white, opacity: 0.8, }}>{this.props.task.category}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ItemTask;