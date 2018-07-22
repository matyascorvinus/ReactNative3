import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator

} from 'react-native';
import axios from 'axios';
import Items from './Items';
import moment from 'moment'
import IconChoosing from './IconChoosing';
class Screen extends Component {
    state = {
        city: 'budapest',
        minus: 0,
        text: '',
        data: null,
        loading: false,
        error: false
    }

    componentWillMount() {
        this.getData();
    }
    async getData() {
        this.setState({
            loading: true,
            error: false
        })
        await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.city : this.state.text}&appid=927d09bc49dbee6aac7f5cb1df707542`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    city: res.data.city.name,
                    data: res.data.list
                })
            }).catch(error => {
                this.setState({
                    error: true
                })
            })
        this.setState({
            loading: false,
        })
    }


    renderItem = ({ item, index }) => {
        console.log(index)
        return (


            <Items date={moment().add(index, 'd').format('DD/MM/YYYY')}
                temp={Math.floor(this.tempConvert(item.temp.max))}
                weather={item.weather[0].main}
            />

        )
    }
    tempConvert(temp1)
    {
        return this.state.minus > 10 ? 1.8*(temp1 - 273) + 32 : temp1 - 273;
    }
    convert = () => {
        this.setState({
            minus: this.state.minus > 10 ? 0 : 273
        })
    }
    onChangeText = (text) => {
        this.setState({
            text
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (


            <ImageBackground style={{
                width: Dimensions.get('screen').width, height: Dimensions.get('screen').height,
                flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
            }} source={require('./Image/800px-War_Ensign_of_Germany_(1938-1945).svg.png')} >

                <View style={{
                    borderRadius: 10, backgroundColor: 'rgba(0, 0, 0,0.5)', flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center', width: Dimensions.get('screen').width - 10, height: 60, borderRadius: 10
                }}>
                    <TextInput style={{
                        width: Dimensions.get('screen').width * 2 / 3,
                        height: 50,
                        borderRadius: 10,
                        fontWeight: 'bold', fontSize: 22,
                    }} onChangeText={this.onChangeText} />
                    <TouchableOpacity style={{
                        width: 100, height: 50, borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={() => this.getData()} >
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Search</Text>
                    </TouchableOpacity>
                </View>

                {!this.state.error ?
                    <View >

                        <View style={{
                            borderRadius: 10, backgroundColor: 'rgba(0, 0, 0,0.5)', flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center', width: Dimensions.get('screen').width - 10, height: 300, borderRadius: 10
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center',  height: 100 }}>
                                    <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold' }}>{this.state.city} </Text>
                                    <Text style={{ color: '#FFF', fontSize: 18 }}>{moment().format('DD/MM/YYYY')}</Text>
                                    <Text style={{ color: '#FFF', fontSize: 20 }}>{this.state.data[0].weather[0].description}</Text>
                                    <IconChoosing weather={this.state.data[0].weather[0].main} style={{ width: 50, height: 50 }} />
                                    <Text style={{ color: '#FFF', fontSize: 70 }}>{Math.floor(this.tempConvert(this.state.data[0].temp.max))}°</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <TouchableOpacity onPress={this.convert}>
                                            <Text style={{ color: this.state.minus > 10 ? 'red' : 'white', fontSize: 30 }}> F° </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.convert}>
                                            <Text style={{ color: this.state.minus > 10 ? 'white' : 'red', fontSize: 30, marginLeft: '20%' }}>C°</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                               

                            {/*  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    
                                </View>
                                
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                    <Text style={{ color: '#FFF', fontSize: 70 }}>{Math.floor(this.state.data[0].temp.max)}°</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <TouchableOpacity >
                                            <Text style={{ color: this.state.minus > 10 ? '#817E92' : 'white', fontSize: 30 }}> F° </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text style={{ color: this.state.minus > 10 ? 'white' : '#817E92', fontSize: 30, marginLeft: '20%' }}>C°</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> */}

                        </View>
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            extraData={this.state.minus}
                        />
                    </View>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontSize: 30 }}> 404 not found</Text>
                    </View>
                }
            </ImageBackground >
        );
    }
}
export default Screen;



