import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';


import Form from './form'
import Logo from './logo'

interface Props {
}

export default class SignIn extends React.Component <Props, null>{
  render() {
  
    return (
    <View style={styles.container}>
        <View style={styles.logo}><Logo/></View>
        <View style={styles.form}><Form /></View> 
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
        height: 320,
        width: 300,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: '#401295',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    }

})
