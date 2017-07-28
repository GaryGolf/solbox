import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Calendar extends React.Component<null, null>{
    render(){
        return (
             <Svg width="80" height="87" viewBox="0 0 80 87">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#fff" 
                    d="M0 87v-57h80v57h-80zm0-83h10v-2c0-1.104.896-2 2-2s2 .896 2 2v2h10v-2c0-1.104.896-2 2-2s2 .896 2 2v2h10v-2c0-1.104.896-2 2-2s2 .896 2 2v2h10v-2c0-1.104.896-2 2-2s2 .896 2 2v2h10v-2c0-1.104.896-2 2-2s2 .896 2 2v2h10v23h-80v-23z"
                />
            </Svg>
        )
    }
}