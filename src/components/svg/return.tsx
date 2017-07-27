import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Return extends React.Component<null, null>{
    render(){
        return (
             <Svg width="14" height="14" viewBox="0 0 14 14">
                <Path 
                   fill-rule="evenodd" 
                   clip-rule="evenodd" 
                   fill="#fff" 
                   d="M14 1.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z"
                />
            </Svg>
        )
    }
}