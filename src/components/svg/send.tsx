import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Send extends React.Component<null, null>{
    render(){
        return (
             <Svg width="21" height="18" viewBox="0 0 21 18">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#fff" 
                    d="M.01 18l20.99-9-20.99-9-.01 7 15 2-15 2 .01 7z"
                />
            </Svg>
        )
    }
}