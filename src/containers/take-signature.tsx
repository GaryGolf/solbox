import * as React from 'react'
import {
  StyleSheet, Text, View, TouchableHighlight,
  PanResponder, PanResponderInstance, GestureResponderEvent, PanResponderGestureState,
  Dimensions
} from 'react-native'

import Signature from '../components/signature'

const { width, height } = Dimensions.get('window')

interface Props {}
interface State {
    path: Array<string>
}

export default class TakeSignature extends React.Component <Props, State> {
    
    private path: string
    private panResponder: PanResponderInstance

    constructor(props:Props) {
        super(props)

        this.path = ''
        this.state = {
            path: []
        }

    }
    componentWillMount() {
        this.panResponder = PanResponder.create({    
            onPanResponderRelease:(e:GestureResponderEvent,gestureState:PanResponderGestureState) => {
                const path = this.path
                this.setState(state=>({path:[...state.path,path]}))
                this.path = ''
            },
            onPanResponderMove: (e:GestureResponderEvent, gestureState:PanResponderGestureState) => {
                const x = Math.floor(gestureState.moveX)
                const y = Math.floor(gestureState.moveY)
                this.path += !this.path?`M ${x} ${y}`:` L ${x} ${y}`
            },
            onMoveShouldSetPanResponder:(e, gestureState) => true, 
            onPanResponderTerminationRequest: (e, gestureState) => true,
        })
    }

    render() {
        return (
        <View style={styles.container} {...this.panResponder.panHandlers}>
            <View style={styles.header}> 
                <Text style={styles.placeholder}>Signature</Text>
            </View>
            <View style={styles.canvas}>
                <Signature path={this.state.path}/>
            </View>
            <View style={styles.button_group}>
                <TouchableHighlight style={styles.button}
                    onPress={()=>{this.path='';this.setState({path:[]})}}>
                    <Text style={styles.label}>Clear</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}><Text style={styles.label}>Submit</Text></TouchableHighlight>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#512da7',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    canvas: {
        flex: 10,
        width: '100%',
        height: '100%'
    },
    button_group: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        margin: '10%',
        backgroundColor: '#512da7',
        alignItems: 'center'
    },
    label: {
        margin: 6,
        color: '#fff'
    },
    placeholder: {
        flex: 1,
        marginLeft: 20,
        fontWeight: '600',
        color: '#fff'
    }
})