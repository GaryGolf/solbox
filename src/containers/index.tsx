import * as React from 'react';
import { Provider, Store } from 'react-redux'
import configureStore from '../store'
import SignIn from './sign-in/index'

const store = configureStore()

export default class Main extends React.Component <null, null>{

  render() {
    return (
      <Provider store={store}>
        <SignIn/>
      </Provider>
    );
  }
}