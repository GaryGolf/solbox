import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { bindActionCreators } from 'redux'
const {connect} = require('react-redux')
import * as Actions from '../../actions/index'
import {UserState} from '../../reducers/user'


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
        <View style={styles.logo}>
            <Logo/>
        </View>
        <View style={styles.form}>
          
                <Form />
        </View> 
            
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        height: '100%',
        // minHeight: 100,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#512da7',
    },
    logo: {
        margin: '13%',
    },
    form: {
        height: '50%',
        width: '85%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    }

})
