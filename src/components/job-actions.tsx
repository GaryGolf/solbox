import * as React from 'react'
import {StyleSheet, View, TouchableHighlight} from 'react-native'

import Close from './svg/close'
import Comment from './svg/comment'
import Notify from './svg/notify'
import Photo from './svg/photo'

interface Props {
    navigate(path:string):void
}
interface State {}

export default class JobActions extends React.Component <Props, State> {
    render() {
        const {navigate} = this.props
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
                        onPress={()=>navigate('Comment')}>
                        <View style={styles.button}>
                            <Comment/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>navigate('Notify')}>
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
        paddingHorizontal: 35
    },
    button: {
        marginHorizontal: 15,
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