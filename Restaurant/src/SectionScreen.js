import React, { Component } from 'react';
import {
    Text,
    View,
    SectionList,
    ImageBackground,
    Dimensions
} from 'react-native';
import SectionItem from './SectionItem';
import SectionCategory from './SectionCategory';
import {data} from './sectionlist-db.json'

class SectionScreen extends Component {
    state = {}

    renderItem = ({ item }) => <SectionItem content={item} />


    renderSectionHeader = ({ section: { category } }) => <SectionCategory category={category} />
    render() {

        return (
            // <ImageBackground source={require('./Images/hungarian_turul_design_by_teamslinky-d4ylafh.jpg')}
            //     style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}
            // >
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={data}
                    keyExtractor={(item) => item.id}
                />
            // </ImageBackground>
        );
    }
}

export default SectionScreen;