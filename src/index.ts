import * as React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Main from './containers/main'
import HelloWorld from './containers/hello-world'
import SignIn from './containers/sign-in/sign-in'

const Stack = {
    Main: { screen: Main},
    HelloWorld: {screen: HelloWorld},
    SignIn: {screen: SignIn}
}

const Drawer = {
    MainStack: {name: 'MainStack', screen: StackNavigator(Stack, {initialRouteName: 'Main'})},
    HelloStack: {name: 'HelloStack', screen: StackNavigator(Stack, {initialRouteName: 'HelloWorld'})}
}

export default StackNavigator({
    Drawer: { name: 'Drawer', screen: DrawerNavigator(Drawer) },
    ...Stack
},{headerMode: 'none'})