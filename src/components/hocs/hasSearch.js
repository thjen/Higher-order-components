import React from 'react';
import {View, TextInput} from 'react-native';

const hasSearch = () => WrappedComponent => {
  class HasSearch extends React.Component {
    state={
      searchName: ''
    }
    render() {
      return (
        <View>
          <TextInput value={this.state.searchName} onChangeText={(text) => this.setState({searchName: text})}
            placeholder="Tìm kiếm"
          />
          <WrappedComponent {...this.state} {...this.props}/>
        </View>
      )
    }
  }
  return HasSearch;
}
export default hasSearch;