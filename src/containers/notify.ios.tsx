import * as React from 'react'
import {StyleSheet, Text, View, Picker, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'

interface Props {
    navigation?: NavigationParams
}
interface State {
    distance: number
    time: number
    arrival: number
    text: string
}

export default class Notify extends React.Component <Props, State> {

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
            distance: 0,
            time: 10,
            arrival: 10,
            text: '',
        }
    }

    render(){
        return  (
            <View style={styles.container}>
                <Text style={styles.label}>Distance to destination</Text>
                <Picker 
                    selectedValue={this.state.distance}
                    prompt="Distance to destination"
                    onValueChange={itemValue=>this.setState({distance:itemValue})}>
                    <Picker.Item label="10 Km" value="10" />
                    <Picker.Item label="20 Km" value="20" />
                    <Picker.Item label="30 Km" value="30" />
                    <Picker.Item label="40 Km" value="40" />
                    <Picker.Item label="50 Km" value="50" />
                </Picker>
                <Text style={styles.label}>Time to destination</Text>
                <Picker 
                    selectedValue={this.state.time}
                    prompt="Time to destination"
                    onValueChange={itemValue=>this.setState({time:itemValue})}>
                    <Picker.Item label="5 min" value="5" />
                    <Picker.Item label="10 min" value="10" />
                    <Picker.Item label="15 min" value="15" />
                    <Picker.Item label="30 min" value="30" />
                    <Picker.Item label="60 min" value="60" />
                </Picker>
                <Text style={styles.label}>Notify arrival time</Text>
                <Picker 
                    selectedValue={this.state.arrival}
                    prompt="Notify arrival time"
                    onValueChange={itemValue=>this.setState({arrival:itemValue})}>
                    <Picker.Item label="1 pm" value="1" />
                    <Picker.Item label="2 pm" value="2" />
                    <Picker.Item label="3 pm" value="3" />
                    <Picker.Item label="4 pm" value="4" />
                    <Picker.Item label="5 pm" value="5" />
                </Picker>
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
    send: {
        margin: 20
    }

})