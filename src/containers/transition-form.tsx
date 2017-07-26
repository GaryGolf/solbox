import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'

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
            focus: 'time',
            time: getTime(),
            name: '',
            signature: '',
        }
    }

    render(){
        const {focus, time, name } = this.state
        return  (
            <View style={styles.container}>
                <Text style={styles.label}>Start time</Text>
                <TextInput
                    style={!!time||focus=='time'?styles.input:styles.empty}
                    keyboardType={'default'}
                    maxLength={180}
                    autoFocus={true}
                    onFocus={()=>this.setState({focus:'time'})}
                    value={this.state.time}
                    onChange={e=>this.setState({time:e.nativeEvent.text})}
                />
                <Text style={styles.label}>Depot signature name</Text>
                <TextInput
                    style={!!name||focus=='name'?styles.input:styles.empty}
                    keyboardType={'default'}
                    maxLength={180}
                    onFocus={()=>this.setState({focus:'name'})}
                    value={this.state.name}
                    onChange={e=>this.setState({name:e.nativeEvent.text})}
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
       height: 0,
       color: '#000'
    },
    input: {
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%'
    },
    send: {
        margin: 20
    }

})