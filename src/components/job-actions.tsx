import * as React from 'react'
import {StyleSheet, View} from 'react-native'

import Cancel from './svg/cancel'

interface Props {}
interface State {}

export default class JobActions extends React.Component <Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Cancel/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#512DA7'
    }
})