import * as React from 'react'
import {Dimensions} from 'react-native'
import Svg, {Path} from 'react-native-svg'

interface Props {
    path: Array<string>
}
interface State {}

const { width, height } = Dimensions.get('window')

export default class Signature extends React.Component <Props, State> {
    render(){
        const paths = this.props.path.map((d,i)=>(
            <Path
                key={i} 
                d={d}
                fill="transparent"
                stroke="black"
                strokeWidth="4"
            />
        ))
        return (
            <Svg width={width} height={height}>
                {paths}
            </Svg>

        )
    }
}