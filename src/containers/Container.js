import React from 'react';
import { compose } from 'redux';
import isContainer from '../components/hocs/isContainer';
import isList from '../components/hocs/isList';
import DefaultLoader from '../components/Default';
import Item from './Item';

export default compose(
  isContainer({
    data: {
      url: 'https://jsonplaceholder.typicode.com/comments', 
      params: {
        page: 1,
        _limit: 10
      },
      loadingMessage: "Loading Comments..."
    },
    DefaultComponent: DefaultLoader,
  }),
  isList(),
)(Item);