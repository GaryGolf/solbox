import * as React from 'react'
import Svg, {Path, G, Text} from 'react-native-svg'

interface Props {
    color:string
}
export default class Calendar extends React.Component<Props, null>{
    render(){
        return (
             <Svg width="16" height="16" viewBox="0 0 16 16">
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill={this.props.color}
                    d="M8 16c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14.452c-3.558 0-6.452 2.894-6.452 6.452s2.894 6.452 6.452 6.452 6.452-2.894 6.452-6.452-2.894-6.452-6.452-6.452zm3.613 7.226h-4.387v-4.903c0-.428.347-.774.774-.774s.774.347.774.774v3.354h2.838c.428 0 .774.347.774.774s-.345.775-.773.775z"
                />
            </Svg>
        )
    }
}