import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Menu extends React.Component<null, null>{
    render(){
        return (
             <Svg width="18" height="12" viewBox="0 0 18 12">
                <Path 
                   fill-rule="evenodd" 
                   clip-rule="evenodd" 
                   fill="#fff" 
                   d="M0 0v2h18v-2h-18zm0 7h18v-2h-18v2zm0 5h18v-2h-18v2z"
                />
            </Svg>
        )
    }
}