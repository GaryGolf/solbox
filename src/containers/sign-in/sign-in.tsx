import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { bindActionCreators } from 'redux'
const {connect} = require('react-redux')
import * as Actions from '../../actions/index'
import {UserState} from '../../reducers/user'
// import {BoxShadow as Shadow} from 'react-native-shadow'

import Form from './form'
import Logo from './logo'

interface Props {
    user?: UserState
    actions?: Actions.Interface
}

@connect(
    store => ({
        user: store.user as UserState
    }),
    dispatch => ({
        actions: {
            user: bindActionCreators(Actions.User as any, dispatch)  
        } 
    })
)
export default class SignIn extends React.Component <Props, null>{
  render() {
   
    return (
      <View style={styles.container}>
        {/* <Text style={styles.logo}>SolBox</Text> */}
        <Logo/>
        {/* <BoxShadow settings={shadowSettings}>
        </BoxShadow> */}

            <Form 
            />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        minHeight: 100,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#512da7'
    },
    logo: {
        fontSize: 45,
        width: '75%',
        textAlign: 'center',
        color: '#ffffff',
        margin: 20,
    }
})
