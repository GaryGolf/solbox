import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export default class Arrow extends React.Component<null, null>{
    render(){
        return (
             <Svg width="20" height="20" viewBox="0 0 20 20">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#5532A9" 
                    d="M10 20c-5.508 0-10-4.492-10-10s4.492-10 10-10 10 4.475 10 10-4.492 10-10 10zm0-18.589c-4.733 0-8.589 3.855-8.589 8.589s3.856 8.589 8.589 8.589 8.589-3.855 8.589-8.589-3.856-8.589-8.589-8.589zm-1.308 13.58c-.138.138-.327.207-.499.207-.189 0-.362-.069-.5-.207-.275-.275-.275-.723 0-.998l4.045-4.045-4.045-4.045c-.275-.275-.275-.723 0-.998.276-.275.723-.275.999 0l4.544 4.544c.138.138.207.31.207.499s-.069.361-.207.499l-4.544 4.544z"
                />
            </Svg>
        )
    }
}