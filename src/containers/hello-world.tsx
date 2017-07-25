import * as React from 'react'
import {View, Text, Button, Image } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

interface Props {
    navigation?: NavigationParams
}
interface State {}

export default class HelloWrold extends React.Component <Props, State> {
    static navigationOptions:NavigationStackScreenOptions = {
        title: 'HelloWorld',
        headerLeft: <Text>Info</Text>,
    };
     render() {
        const { goBack } = this.props.navigation;
        return (
        <View>
            <Text>Hello, World App!</Text>
            <Button
                onPress={() => goBack(null)}
                title="back"
            />
            <Image source={require('../../img/one.png')}/>
        </View>
        );
    }
}