import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Notify extends React.Component<null, null>{
    render(){
        return (
             <Svg width="20" height="20.059" viewBox="0 0 20 20.059">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#7F7F7F" 
                    d="M20.001 11.574c0 .552.079 1.207-1.001 1.426h-17v6c0 .552-.459 1-1.007 1-.549 0-.993-.447-.993-.999v-19.001h19c.355 0 .69.163.868.473.177.311.175.692-.005 1.001l-3.372 4.798 3.346 4.752c.103.158.164.347.164.55zm-5.518-4.798c-.181-.312-.181-.697 0-1.009l2.517-3.767h-15v9h15l-2.517-4.224z"
                />
            </Svg>
        )
    }
}