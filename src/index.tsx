import * as React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Main from './containers/main'
import HelloWorld from './containers/hello-world'


export default StackNavigator({
    Main: { screen: Main },
    HelloWorld: { screen: HelloWorld },

})