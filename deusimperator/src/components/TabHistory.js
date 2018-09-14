import React, { Component } from 'react';
import {
  Text,
  View,FlatList
} from 'react-native';
import HistoryItem from './HistoryItem';
import { connect } from 'react-redux';

class TabHistory extends Component {
  state = {  }
  render() {
    renderItem =({item}) =><HistoryItem dataHistory={item}/>
    return (
        <View style={{backgroundColor:'#9d262b',justifyContent:'flex-start',alignItems:'center'}}>
        <FlatList
        data={this.props.history}
        keyExtractor={(item) => item.key.toString()}
        renderItem={this.renderItem}
       />
        </View>
    );
  }
}
const mapStateToProps = ({ history }) => ({ history })
export default connect(mapStateToProps,null) (TabHistory);