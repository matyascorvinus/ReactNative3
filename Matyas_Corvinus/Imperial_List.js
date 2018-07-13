import React, { Component } from 'react';
import {
    ImageBackground,
    FlatList
} from 'react-native';
import { data } from './database.json';



import Item_UI from './Item_UI';
class Imperial_List extends Component {
    
    state = {}
    
    renderItem = ({ item }) => <Item_UI items={item} />

    keyExtractor = (item, index) => item.id
    render() {
        
        return (
           
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    
                    keyExtractor={this.keyExtractor}
                />
          
        );
    }
}
const bg = {
    uri: 'https://mfiles.alphacoders.com/580/580645.jpg'
  }

export default Imperial_List;