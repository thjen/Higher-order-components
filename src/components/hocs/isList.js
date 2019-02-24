import React from 'react';
import {ScrollView} from 'react-native';

const isList = () => WrappedComponent => {
  const IsList = props => (
    <ScrollView>
      {
        props.data.filter((element) => element.name.toLowerCase().includes(props.searchName.toLowerCase())).map(element => (
          <WrappedComponent {...element} key={element.id}/>
        )) 
      }
    </ScrollView>
  )
  return IsList;
}
export default isList;