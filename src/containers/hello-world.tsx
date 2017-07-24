import * as React from 'react'
import {View, Text, Button, Image } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

interface Props {
    navigation?: NavigationParams
}
interface State {}

export default class HelloWrold extends React.Component <Props, State> {
    static navigationOptions:NavigationStackScreenOptions = {
        title: 'SolBox',
        headerLeft: <Text>Info</Text>,
    };
     render() {
        const { navigate } = this.props.navigation;
        return (
        <View>
            <Text>Hello, Chat App!</Text>
            <Button
            onPress={() => navigate('Chat')}
            title="Chat with Lucy"
            />
            <Image source={require('../../img/one.png')}/>
        </View>
        );
    }
}