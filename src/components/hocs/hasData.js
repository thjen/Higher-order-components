import React from 'react';
import axios from 'axios';

const hasData = ({url, params, loadingMessage}) => WrappedComponent => {
  class HasData extends React.Component {
    state={
      data: [],
      useDefault: false,
      hasError: false,
      loading: false,
      error: {
        title: 'Cannot retrive data',
        message: 'Could not retrive data from supplied Api',
      },
      loadingMessage,
    }
    componentDidMount() {
      this.setState({loading: true});
      axios.get(url, {params})
        .then(({data}) => {
          this.setState({
            data,
            loading: false,
            hasError: false,
            userDefault: data.length === 0
          });
        })
        .catch(error => {
          this.setState({
            hasError: true,
            loading: false,
          });
        });
    }
    render() {
      return (
        <WrappedComponent {...this.state} {...this.props}/>
      )
    }
  }
  return HasData;
}
export default hasData;