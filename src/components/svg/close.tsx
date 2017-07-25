import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Close extends React.Component<null, null>{
    render(){
        return (
             <Svg  width="18.385" height="18.384" viewBox="0 0 18.385 18.384">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#7F7F7F" 
                    d="M18.385 16.97l-1.414 1.414-7.778-7.778-7.778 7.778-1.415-1.414 7.778-7.778-7.778-7.778 1.414-1.414 7.778 7.778 7.779-7.778 1.414 1.414-7.778 7.778 7.778 7.778z"
                />
            </Svg>
        )
    }
}