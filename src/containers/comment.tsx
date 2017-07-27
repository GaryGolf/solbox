import * as React from 'react'
import {StyleSheet, View, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Send from '../components/svg/send'
import Return from '../components/svg/return'
import HiddenInput from '../components/hidden-input'

interface Props {
    navigation?: NavigationParams
}
interface State {
    text: string
}

export default class Comment extends React.Component <Props, State> {

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
            text: '',
        }
        
    }

    render(){
        const { text } = this.state
        return  (
            <View style={styles.container}>
                <HiddenInput
                    title="Text comment.."
                    autoFocus={true}
                    onChangeText={text=>this.setState({text})}
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
    send: {
        margin: 20
    }
})