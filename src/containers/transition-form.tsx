import * as React from 'react'
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Check from '../components/svg/check'
import Return from '../components/svg/return'
import Signature from '../components/signature'
import HiddenInput from '../components/hidden-input'

interface Props {
    navigation?: NavigationParams
}
interface State {
    focus: 'name' | 'time' | null
    time: string
    name: string
    signature: string
}

const getTime = ():string => {
    const m = new Date().getMinutes()
    const hours = new Date().getHours()
    const minutes = m<10? `0${m}`:`${m}`
    return `${hours}:${minutes}`
}

export default class TransitionForm extends React.Component <Props, State> {
    
    static navigationOptions = ({navigation}) => ({
        title: 'Booking Depot In',
        headerLeft: (
            <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
                 <View style={styles.send}>
                    <Return/>
                </View> 
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
                 <View style={styles.send}>
                    <Check/>
                </View> 
            </TouchableHighlight>
        ),
        headerStyle: {backgroundColor: '#512da7'} ,
        headerTitleStyle: { color: '#fff'}
    }) 

    constructor(props:Props){
        super(props)

        this.state={
            focus: 'time',
            time: getTime(),
            name: '',
            signature: ''
        }
    }
 
    render(){
        const {focus, time, name } = this.state
        return  (
            <View style={styles.container}>
                <View style={styles.form}>
                    <HiddenInput
                        title="Start time"
                        value={time}
                        autoFocus={true}
                        onChangeText={text=>this.setState({time:text})}
                    />
                     <HiddenInput
                        title="Depot signature name"
                        onChangeText={text=>this.setState({name:text})}
                    />
                    <Text style={styles.label}>Depot in signature</Text>
                </View>
                <Signature />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    form: {
        paddingHorizontal: 20
    },
    label: {
        fontSize: 16,
        justifyContent: 'flex-start',
        fontWeight: '300',
        color: '#bbb',
        marginTop: 15
    },
    send: {
        margin: 20
    }

})