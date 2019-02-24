import React from 'react';
import branch from './branch';

const hasDefault = (DefaultComponent) => WrappedComponent => {
  const HasDefault = props => 
    branch(props.useDefault, DefaultComponent, WrappedComponent)(props);
  return HasDefault;
}
export default hasDefault;