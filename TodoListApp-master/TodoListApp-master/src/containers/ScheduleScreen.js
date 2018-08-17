import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, SectionList
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

import { white, calendarBackground, calendarHighlight, commonStyles } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../database.json';

import {connect} from 'react-redux';
import { getDateStringFromDate } from '../utils';


const listReference = 'listReference'
class ScheduleScreen extends Component {
  state = {
  }

  onDateSelected = (date) => {
   
    const index = this.props.tasks.map(dayTasks =>dayTasks.date).indexOf(getDateStringFromDate(date._d))
    console.log(index)
    index!==-1&& this.scrollSectionList(index)
  }
  scrollSectionList=(index)=>{
    this.refs.listReference.scrollToLocation({
      sectionIndex: index,
      itemIndex:0,
      viewOffset:40,
    });
  }
  renderItem = ({item ,section: { id }}) => <ItemTask task={item} dayId ={id}/>

  renderSectionHeader = ({section: { date }}) => <ItemDate date={date}/>

  render() {
    return (
      <View style={commonStyles.container}>
        <CalendarStrip
          style={commonStyles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id}
          ref={listReference}
        />
      </View>
    );
  }
}
const mapStateToProps =(store)=>({tasks:store.tasks})
export default connect(mapStateToProps)(ScheduleScreen);