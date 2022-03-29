import React, {Component} from 'react';
import { FlatList, Text, StyleSheet } from 'react-native-web';

class EventList extends Component {
    state = {
      schedule: []
};
componentDidMount() {
const schedule = require('./data.json').schedule;
 this.setState({schedule});
}


    render () {
         return (
          <FlatList
            data={this.state.schedule}
            renderItem={ ({item}) => <Text> {item.contractor} - {item.place} - {item.time} </Text> }
          ></FlatList>
         );
    }
}
const style = StyleSheet.create({
  eventItem: {
    backgroundColor: '#ff001e',
    marginBottom: 30,
  },


});

export default EventList;