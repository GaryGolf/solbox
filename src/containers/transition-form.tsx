import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'

interface Props {
    navigation?: NavigationParams
}
interface State {
    time: string
    name: string
    signature: string
}

export default class TransitionForm extends React.Component <Props, State> {

    static navigationOptions = ({navigation}) => ({
        title: 'Booking Depot In',
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
            time: '12:30',
            name: '',
            signature: '',
        }
    }

    render(){
        return  (
            <View style={styles.container}>
                <Text style={styles.label}>Start time</Text>
                <TextInput
                    style={!this.state.time?[styles.input, styles.empty]:styles.input}
                    keyboardType={'default'}
                    maxLength={180}
                    value={this.state.time}
                    onChange={e=>this.setState({time:e.nativeEvent.text})}
                />
                <Text style={styles.label}>Depot signature name</Text>
                <TextInput
                    style={!this.state.time?[styles.input, styles.empty]:styles.input}
                    keyboardType={'default'}
                    maxLength={180}
                    value={this.state.time}
                    onChange={e=>this.setState({time:e.nativeEvent.text})}
                />
                <Text style={styles.label}>Depot in signature</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
    },
    label: {
        fontSize: 16,
        justifyContent: 'flex-start',
        fontWeight: '300',
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