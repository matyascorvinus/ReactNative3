import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TextInput,
    ImageBackground

} from 'react-native';
import axios from 'axios';
import Items from './Items';
import moment from 'moment'
class Screen extends Component {
    state = { city: 'budapest', text: '' }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.city : this.state.text}&appid=927d09bc49dbee6aac7f5cb1df707542`)
            .then(res => this.setState({ city: res.data.city.name, data: res.data.list }))
    }
    renderItem = ({ item, index }) => {
        console.log(index)
        return (


            <Items date={moment().add(index, 'd').format('DD/MM/YYYY')}
                temp={Math.floor(item.temp.max - 273)}
                weather={item.weather[0].main}
            />

        )
    }

    render() {
        return (
            
                <View style={{
                    backgroundColor: 'rgb(57, 54, 75)',
                    flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center',flex:1
                }} >
                
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        extraData={this.state.minus}
                    />
                </View>
            

        );
    }
}
//    <ImageBackground source={require('./Image/800px-War_Ensign_of_Germany_(1938-1945).svg.png')} />
export default Screen;