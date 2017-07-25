import * as React from 'react'
import {StyleSheet, View, TouchableHighlight} from 'react-native'

import Close from './svg/close'
import Comment from './svg/comment'
import Notify from './svg/notify'
import Photo from './svg/photo'

interface Props {}
interface State {}

export default class JobActions extends React.Component <Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableHighlight
                        onPress={()=>console.log('press')}>
                        <View style={styles.button}>
                            <Close/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>console.log('press')}>
                        <View style={styles.button}>
                            <Comment/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>console.log('press')}>
                        <View style={styles.button}>
                            <Notify/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>console.log('press')}>
                        <View style={styles.button}>
                            <Photo/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.spacer}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#bbb'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    button: {
        marginVertical: 15
    },
    spacer: {
        height: 16,
        backgroundColor: '#e5e5e5',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#bbb'
    }
})