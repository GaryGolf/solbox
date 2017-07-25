import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Car from './svg/car'
import Pointer from './svg/pointer'
import Arrow from './svg/arrow'

interface Props {
    name:string
    address:string
    link:string
}
interface State {}

export default class JobBody extends React.Component <Props, State> {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Car/>
                    <Text style={[styles.text, styles.name]}>{this.props.name}</Text>
                </View>
                <View style={styles.row}>
                    <Pointer/>
                    <Text style={styles.text}>{this.props.address}</Text>
                </View>
                 <View style={styles.row}>
                    <Arrow/>
                    <Text style={[styles.text,styles.link]}>{this.props.link}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#fff'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 22
    },
    text: {
        marginTop: -2,
        marginLeft: 10,
        fontSize: 16,
        color: '#919191'
    },
    name: {
        fontWeight: '500',
        color: '#555'
    },
    link: {
        color: '#5532A9'
    }
   
})