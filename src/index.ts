import * as React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Main from './containers/main'
import HelloWorld from './containers/hello-world'
import SignIn from './containers/sign-in/sign-in'

const Stack = {
    Main: { screen: Main},
    HelloWorld: {screen: HelloWorld}
}

const Drawer = {
    MainStack: {name: 'MainStack', screen: StackNavigator(Stack, {initialRouteName: 'Main'})},
    HelloStack: {name: 'HelloStack', screen: StackNavigator(Stack, {initialRouteName: 'HelloWorld'})}
}

const Router = StackNavigator({Drawer:{name:'Drawer',screen:DrawerNavigator(Drawer)},...Stack},{headerMode: 'none'})


export default Math.random()>.6? SignIn : Router