import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam('data');
    this.state={
      data: data,
    }
  }
  render() {
    return (
      <View style={{padding: 50, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: 'red'}}>Back</Text>
        </TouchableOpacity>
        <View>
          <Text>{this.state.data.name}</Text>
          <Text>{this.state.data.email}</Text>
          <Text>{this.state.data.body}</Text>
        </View>
      </View>
    );
  }
}