import React from 'react';
import branch from './branch';
import hasProps from './hasProps';
import Loading from '../Loader';

const hasLoader = WrappedComponent => {
  const HasLoader = props => 
    branch(
      props.loading,
      hasProps({message: props.loadingMessage})(Loading),
      WrappedComponent
    )(props);
  return HasLoader;
}
export default hasLoader;