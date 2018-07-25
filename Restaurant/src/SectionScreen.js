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
import {menu} from './sectionlist-db.json'

class SectionScreen extends Component {
    state = {}

    renderItem = ({ item }) => <SectionItem content={item} />


    renderSectionHeader = ({ section: { category } }) => <SectionCategory category={category} />
    render() {

        return (
           
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={menu}
                    keyExtractor={(item) => item.id}
                />
           
        );
    }
}

export default SectionScreen;