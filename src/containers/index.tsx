import * as React from 'react';
import { Provider, Store } from 'react-redux'
import configureStore from '../store'

import SignIn from './sign-in/index'
import FormOne from './form-one/form-one'
import Comment from './comment'
import TakeShot from './take-shot'

const store = configureStore()

export default class Main extends React.Component <null, null>{

  render() {
    return (
      <Provider store={store}>
        {/* <SignIn/> */}
        {/* <FormOne/> */}
        {/* <Comment/> */}
        <TakeShot/>
      </Provider>
    );
  }
}