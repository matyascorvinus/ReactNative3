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
            <ImageBackground style={{flexDirection ='column'}} source ={{uri:'https://www.desktopbackground.org/p/2011/04/17/189337_ideviceart-star-wars-wallpapers-for-iphone-6s-6s-plus_1242x2208_h.jpg'}}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    
                    keyExtractor={this.keyExtractor}
                />
            </ImageBackground>
        );
    }
}

export default Imperial_List;