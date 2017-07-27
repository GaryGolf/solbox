import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Options extends React.Component<null, null>{
    render(){
        return (
             <Svg width="4" height="16" viewBox="0 0 4 16">
                <Path 
                   fill-rule="evenodd" 
                   clip-rule="evenodd" 
                   fill="#fff" 
                   d="M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                />
            </Svg>
        )
    }
}