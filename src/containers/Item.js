import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ShowButton from '../components/ShowButton';

const Item = ({name, email, body}) => (
  <View style={{marginTop: 15, borderWidth: 1, borderColor: 'coral', marginHorizontal: 15, padding: 10, borderRadius: 5}}>
    <Text>Name: {name}</Text>
    <Text>Email: {email}</Text>
    <Text>Body: {body}</Text>
    <ShowButton data={{name: name, email: email, body: body}}/>
  </View>
)
export default Item;