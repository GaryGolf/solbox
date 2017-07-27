import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Check extends React.Component<null, null>{
    render(){
        return (
             <Svg width="17.96" height="13.052" viewBox="0 0 17.96 13.052">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#fff" 
                    d="M5.715 10.325l-4.286-4.091-1.429 1.363 5.715 5.455 12.245-11.688-1.429-1.364-10.816 10.325z"
                />
            </Svg>
        )
    }
}