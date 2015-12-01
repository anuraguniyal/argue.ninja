import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDom.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('app')
);

