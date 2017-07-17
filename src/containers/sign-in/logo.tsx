import * as React from 'react'
// import {StyleSheet, Text, View} from 'react-native'
import Svg, {Path, G} from 'react-native-svg'

export default class Logo extends React.Component<null, null>{
    render(){
        return (
             <Svg
                height="50"
                width="50"
            >
                <G 
                    x={1} y={-1}
                     rotate="180" 
                     origin="50,50" 
                    scale={.04}
                    fill="white"
                    stroke="none">
                    <Path 
                        d="M325 607 c-3 -7 -4 -87 -3 -177 l3 -165 36 -3 c24 -2 45 -13 65 -33 38 -39 80 -39 119 1 28 30 30 30 135 30 105 0 107 0 135 -30 41 -43 80 -41 128 8 l37 38 0 105 0 105 -37 36 c-35 34 -44 37 -103 40 -59 3 -65 5 -70 28 l-6 25 -217 3 c-172 2 -219 0 -222 -11z m410 -167 l0 -145 -80 -3 c-78 -3 -81 -2 -110 28 -39 41 -81 41 -120 0 -18 -19 -38 -30 -50 -28 -19 3 -20 11 -23 137 -1 74 0 141 2 148 4 11 45 13 193 11 l188 -3 0 -145z m164 66 c13 -13 21 -32 19 -43 -3 -15 -13 -18 -73 -18 -69 0 -70 0 -73 28 -6 48 3 57 56 57 38 0 53 -5 71 -24z m49 -143 c2 -32 0 -43 -11 -43 -8 0 -17 7 -21 15 -10 27 -69 19 -101 -15 -15 -16 -32 -27 -37 -24 -10 6 -11 98 -1 108 4 4 43 5 88 4 l80 -3 3 -42z m-418 -86 c0 -5 -10 -17 -22 -27 -21 -16 -24 -17 -45 -1 -28 20 -28 28 -1 51 21 16 24 17 45 1 12 -9 23 -20 23 -24z m390 0 c0 -5 -10 -17 -22 -27 -21 -16 -24 -17 -45 -1 -28 20 -28 28 -1 51 21 16 24 17 45 1 12 -9 23 -20 23 -24z"
                    />
                
                </G>
            </Svg>
        )
    }
}