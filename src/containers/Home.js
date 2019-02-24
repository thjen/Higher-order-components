import React from 'react';
import {View} from 'react-native';
import Container from './Container';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{paddingTop: 40, backgroundColor: 'white'}}>
        <Container/>
      </View>
    );
  }
}