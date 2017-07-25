import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'

interface Props {
    navigation?: NavigationParams
}
interface State {
    text: string
}

export default class Comment extends React.Component <Props, State> {

    static navigationOptions = ({navigation}) => ({
        title: 'Add Comment',
        headerRight: (
            <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
                 <View style={styles.send}>
                    <Send/>
                </View> 
            </TouchableHighlight>
        ),
        headerStyle: {backgroundColor: '#512da7'} ,
        headerTitleStyle: { color: '#fff'}
    }) 

    constructor(props:Props){
        super(props)

        this.state={
            text: '',
        }
    }

    render(){
        return  (
            <View style={styles.container}>
                <Text style={styles.label}>Text comment...</Text>
                <TextInput
                    style={!this.state.text?[styles.input, styles.empty]:styles.input}
                    keyboardType={'default'}
                    maxLength={180}
                    value={this.state.text}
                    onChange={e=>this.setState({text:e.nativeEvent.text})}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingRight: 20
    },
    label: {
        fontSize: 18,
        justifyContent: 'flex-start',
        fontWeight: '300',
        marginLeft: 20,
        color: '#777'
    },
    empty: {
       height: 0
    },
    input: {
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%',
        margin: 10
    },
    send: {
        margin: 20
    }

})