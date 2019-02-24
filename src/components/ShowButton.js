import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

class Show extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {data: this.props.data})}>
        <Text style={{color: 'red'}}>Show</Text>
      </TouchableOpacity>
    )
  }
}
export default withNavigation(Show);