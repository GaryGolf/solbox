import * as React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HelloWorld from './containers/hello-world'


export default StackNavigator({
    Home: { screen: HelloWorld },

})