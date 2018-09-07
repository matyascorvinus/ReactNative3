import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { commonStyles, primaryColorRed } from '../styles';
import OrderItem from './OrderItem';
import { connect } from 'react-redux';
import {clearOrder} from'../actions'
import firebase from 'react-native-firebase'
class TabOrder extends Component {

  renderItem = ({ item }) => <OrderItem item={item} />
  confirmOrder = () => {
    if(this.props.orders.length===0) return;
    const dataRef = firebase.database().ref('/users').child(firebase.auth().currentUser.uid).child('history')

    //1. get array history from firebase

    dataRef.once('value', res => {
      //2. add order to array 
      const currentTime = new Date().toString()
      const currentOrder = {
        onGoing: true,
        orders: this.props.orders,
        date: currentTime.substring(0, currentTime.indexOf('GMT'))
      }
      //3. push array to firebase
      res._value!==null ? dataRef.set([...res._value, currentOrder]).then(this.confirmSuccessful): dataRef.set([currentOrder]).then(this.confirmSuccessful)
      
    })

  }
  confirmSuccessful = () =>{
    this.props.clearOrder()
    this.props.navigation.navigate('History')
  }

  render() {
    const totalPrice = (this.props.orders.length === 0) ? 0 :
      this.props.orders.reduce((accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.amount, 0)
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.fontTitleScreen}>Order</Text>
        <FlatList
          style={{ flexGrow: 0 }}
          data={this.props.orders}
          keyExtractor={(item) => item.key.toString()}
          renderItem={this.renderItem}
        />

        <View style={{ height: 2, backgroundColor: primaryColorRed, marginHorizontal: 20 }}></View>
        <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
          <Text style={[commonStyles.fontTitleScreen, { flex: 1 }]}>Total</Text>
          <Text style={commonStyles.fontTitleScreen}>{`${totalPrice}$`}</Text>
        </View>
        <TouchableOpacity onPress={this.confirmOrder}
          style={{
            height: 50, width: 150, borderRadius: 25, backgroundColor: this.props.orders.length === 0 ? 'gray' : primaryColorRed,
            justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 16, alignSelf: 'center'
          }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>
      </View>);
  }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps,{clearOrder})(TabOrder);