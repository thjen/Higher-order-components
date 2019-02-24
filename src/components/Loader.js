import React from 'react';
import {View, Text} from 'react-native';

const Loading = ({message='Loading'}) => (
  <View>
    <Text>Message: {message}</Text>
  </View>
)
export default Loading;