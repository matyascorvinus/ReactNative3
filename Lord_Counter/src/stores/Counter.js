import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
class Counter extends Component {
  state = {  }
  render() {
    return (
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>{this.props.counter}</Text>
        //<Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Empire</Text>
    );
  }
}

const mapStateToProps = state => ({
    counter: state.plusOrMinus
});
export default connect(mapStateToProps, null)(Counter);
//export default Counter;