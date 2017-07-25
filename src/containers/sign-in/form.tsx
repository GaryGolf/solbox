import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

import Truck from './truck'

interface Props {
}

export default class Form extends React.Component <Props, null>{
  render() {
   
    return (
        <View style={styles.container}>
            <Text style={styles.header}>S I G N   I N</Text>
            <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Username (e-mail)'}
                maxLength={60}
            />
            <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'password'}
                maxLength={60}
            />
            <TouchableHighlight style={styles.button}>
            <View style={styles.label}> 
                <Truck/> 
                <Text style={styles.text}>  SIGN IN</Text>
            </View>   
            </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 20,
        fontWeight: '800',
        letterSpacing: 40,
        textAlign: 'center',
        color: '#512da7',
        margin: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#e9e9e9',
        paddingLeft: 5,
        width: '60%',
        color: '#512da7',
        margin: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#58cbe8',
        width: '60%',
        marginTop: 20,
    },
    label: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    }



})
