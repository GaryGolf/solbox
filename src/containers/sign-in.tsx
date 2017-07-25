import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';


import Truck from '../components/svg/truck'
import Logo from '../components/svg/logo'

interface Credentials {
    username:string
    password:string
} 

interface Props {
    onSubmit(Credentials):void
}

export default class SignIn extends React.Component <Props, null> {
    private login:Credentials = {username:'',password:''}

    onSubmit() {
        if(!this.login.username || !this.login.password) return
        this.props.onSubmit(this.login)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}><Logo/></View>
                <View style={styles.form}>
                    <Text style={styles.header}>S I G N   I N</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>this.login.username=text}
                        keyboardType={'email-address'}
                        placeholder={'Username (e-mail)'}
                        maxLength={60}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>this.login.password=text}
                        keyboardType={'default'}
                        placeholder={'password'}
                        maxLength={60}
                    />
                    <TouchableHighlight style={styles.button}
                        onPress={this.onSubmit.bind(this)}>
                        <View style={styles.label}> 
                            <Truck/> 
                            <Text style={styles.text}>  SIGN IN</Text>
                        </View>   
                    </TouchableHighlight>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
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
        shadowRadius: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
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
