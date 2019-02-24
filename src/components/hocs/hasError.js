import React from 'react';
import Error from '../Error';
import branch from './branch';

const hasError = (ErrorComponent = Error) => WrappedComponent => {
  const HasError = props =>
    branch(props.hasError, ErrorComponent, WrappedComponent)(props);
  return HasError;
}
export default hasError;

