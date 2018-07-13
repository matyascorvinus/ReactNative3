import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    View,
    
} from 'react-native';
//import RatingStar from './RatingStar'
class Item_UI extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image
                    source={{ uri: this.props.items.photos[0] }}
                    style={styles.image} />
                    <View style={styles.fontText}>
                        <Text style={styles.text}>
                            {this.props.items.title}
                        </Text>
                        <Text style={styles.normalText}> 
                            {this.props.items.country}
                        </Text>
                        // <View style={{justifyContent: 'flex-end'}}>
                        //     <RatingStar rate={this.props.items.rate} />
                        // </View> 
                        <View style={{justifyContent: 'flex-end'}}>
                            <Text> {this.props.items.distance} </Text>
                        </View> 
                    </View> 
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 250,
        width: Dimensions.get('window').width,
        padding: 5,
        justifyContent: "space-around",
        backgroundColor: "rgba(254,254,254,0.5)"

    },
    image: {
        height: 90,
        width: 90,


    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    fontText:
    {
        justifyContent:'center'
    },
})
export default Item_UI;