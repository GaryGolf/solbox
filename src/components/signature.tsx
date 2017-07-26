import * as React from 'react'
import { StyleSheet, Text, View, Button,
    PanResponder, PanResponderInstance, GestureResponderEvent, PanResponderGestureState, 
    Dimensions } from 'react-native'
import Svg, {Path} from 'react-native-svg'

interface Props {}
interface State {
    path:string
}

export default class Signature extends React.Component <Props, State> {
    private path: string
    private panResponder: PanResponderInstance
    private offset: number
    
    constructor(props:Props){
        super(props)
        this.path=''
        this.offset = 0
        this.state = {
            path: ''
        }
        this.panResponder = PanResponder.create({    
            onPanResponderRelease:(e:GestureResponderEvent,gestureState:PanResponderGestureState) => {
                const path = this.path
                this.setState(state=>({path: `${state.path} ${path}`}))
                this.path = ''
            },
            onPanResponderMove: (e:GestureResponderEvent, gestureState:PanResponderGestureState) => {
                const x = Math.floor(gestureState.moveX)
                const y = Math.floor(gestureState.moveY) - this.offset
                this.path += !this.path?`M ${x} ${y}`:` L ${x} ${y}`
            },
            onMoveShouldSetPanResponder:(e, gestureState) => true, 
            onPanResponderTerminationRequest: (e, gestureState) => true,
        })
    }

    measureOffset(event) {
        this.offset = Dimensions.get('screen').height - Dimensions.get('window').height + event.nativeEvent.layout.y
    }

    render(){
        const { width, height } = Dimensions.get('window')
      
        return (
            <View  {...this.panResponder.panHandlers}
                onLayout={this.measureOffset.bind(this)}>
                <Svg width={width} height={height}>
                    <Path
                        d={this.state.path}
                        fill="transparent"
                        stroke="black"
                        strokeWidth="4"
                    />
                </Svg>
            </View>

        )
    }
}