import React from 'react';
import {compose} from 'redux';
import hasData from './hasData';
import hasLoader from './hasLoader';
import hasError from './hasError';
import hasDefault from './hasDefault';
import hasSearch from './hasSearch';

const isContainer = ({data, Error, DefaultComponent}) => WrappedComponent => {
  const IsContainer = props => <WrappedComponent {...props}/>
  return compose(
    hasData(data),
    hasLoader,
    hasError(Error),
    hasDefault(DefaultComponent),
    hasSearch()
  )(IsContainer);
}
export default isContainer;