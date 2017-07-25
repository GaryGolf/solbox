import * as React from 'react'
import {View, Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Main from './containers/main'
import HelloWorld from './containers/hello-world'
import SignIn from './containers/sign-in'

const Stack = {
    Main: { screen: Main},
    HelloWorld: {screen: HelloWorld}
}

const Drawer = {
    MainStack: {name: 'MainStack', screen: StackNavigator(Stack, {initialRouteName: 'Main'})},
    HelloStack: {name: 'HelloStack', screen: StackNavigator(Stack, {initialRouteName: 'HelloWorld'})}
}

const Router = StackNavigator({Drawer:{name:'Drawer',screen:DrawerNavigator(Drawer)},...Stack},{headerMode: 'none'})

interface Props {}
interface State {
    username:string
    password:string
}

export default class App extends React.Component <Props, State> { 
    
    constructor(props:Props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    onSignIn({username,password}){
        this.setState({username,password})
    }

    render(){
        const {username, password} = this.state
        if(!username || !password) return <SignIn onSubmit={this.onSignIn.bind(this)}/>
        return <Router/>
    }
}