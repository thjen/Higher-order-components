import React from 'react';
import {View, Text} from 'react-native';

const Error = ({error = {title: 'Unknow', message: 'Unknow'}}) => (
  <View>
    <Text>Title: {error.title}</Text>
    <Text>Message: {error.message}</Text>
  </View>
)
export default Error;