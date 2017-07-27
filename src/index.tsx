import * as React from 'react'
import {View, Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Main from './containers/main'
import Comment from './containers/comment'
import Notify from './containers/notify'
import TransitionForm from './containers/transition-form'

import SignIn from './containers/sign-in'

const Stack = {
    Main: { screen: Main},
    Comment: {screen: Comment},
    Notify: {screen: Notify},
    TransitionForm: {screen: TransitionForm}
}

const Drawer = {
    MainStack: {name: 'MainStack', screen: StackNavigator(Stack, {initialRouteName: 'Main'})}
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
        this.state = { // load from localStorage
            username:'',
            password:''
        }
    }

    onSignIn({username,password}){
        this.setState({username,password})
    }

    render(){
        const {username, password} = this.state
        // if(!username || !password) return <SignIn onSubmit={this.onSignIn.bind(this)}/>
        return <Router/>
    }
}