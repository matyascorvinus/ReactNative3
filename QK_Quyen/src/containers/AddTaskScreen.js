import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

import ChooseCategory from './../components/ChooseCategory';
import CalendarStrip from 'react-native-calendar-strip';
import { gray, white, calendarHighlight, calendarBackground } from '../styles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class AddTaskScreen extends Component {
  state = {
    date: moment(),
    time: moment().format('HH:mm'), isDateTimePickerVisible: false,
    category: '',
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({
      time: moment(date).format('HH:mm')
    })
    this._hideDateTimePicker();
  };
  onDateSelected = (date) => {
    this.setState({
      date
    })
  }
  renderItem = ({ item }) => <ChooseCategory

    category={item.category}
    onPress={() => {
      this.setState({ category: item.category })
    }}
  />
  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip style={styles.calendar} calendarColor={calendarBackground} highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }} onDateSelected={this.onDateSelected}
        />
        <View style={{ flexDirection: 'row', padding: 10, marginStart: 20, alignItems: 'baseline' }}>
          <Text style={styles.dayOfWeek}>{this.state.date.format('dddd')}</Text>
          <Text style={styles.date}>{this.state.date.format('MMMM Do YYYY')}</Text>
        </View>
        <Text style={{ color: gray, fontSize: 20, marginVertical: '3%', fontWeight: 'bold' }}>       Content</Text>
        <View style={{ justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 5, marginRight: '5%', paddingHorizontal: '3%' }}>
          <TextInput underlineColorAndroid='rgba(0,0,0,0.2)' />
        </View>
        <Text style={{ color: gray, fontSize: 20, marginVertical: '3%', fontWeight: 'bold' }}>       Time</Text>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold', color: 'grey' }}>     {this.state.time}</Text>
        </TouchableOpacity >
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='time'
        />
        <FlatList
          renderItem={this.renderItem}
          data={[
            {
              'category': 'To Do'
            },
            {
              'category': 'Personal'
            },
            {
              'category': 'Birthday'
            },
            {
              'category': 'Event'
            },
            {
              'category': 'Shopping'
            },
          ]}
          horizontal={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: white, },
  calendar: { height: 100 },
  dayOfWeek: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    color: gray,
    marginStart: 20,
  }
});

export default AddTaskScreen;