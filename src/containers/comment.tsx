import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight, TextInputStatic} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'
import Return from '../components/svg/return'

interface Props {
    navigation?: NavigationParams
}
interface State {
    focus: boolean
    text: string
}

export default class Comment extends React.Component <Props, State> {

    private input: any
    static navigationOptions = ({navigation}) => ({
        title: 'Add Comment',
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
            focus: false,
            text: '',
        }
    }

    render(){
        const { text, focus } = this.state

        return  (
            <View style={styles.container}>
                <Text style={styles.label} onPress={()=>this.input.focus()}>Text comment...</Text>
                <TextInput
                    style={!!text||focus?styles.input:styles.empty}
                    ref={input=>this.input=input}
                    keyboardType={'default'}
                    value={this.state.text}
                    onChange={e=>this.setState({text:e.nativeEvent.text})}
                    onFocus={()=>this.setState({focus:true})}
                    onBlur={()=>this.setState({focus:false})} 
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
        paddingHorizontal: 20
    },
    label: {
        fontSize: 18,
        justifyContent: 'flex-start',
        fontWeight: '300',
        marginTop: 15,
        color: '#bbb'
    },
    empty: {
       height: 0,
       color: '#000'
    },
    input: {
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%',
    },
    send: {
        margin: 20
    }

})