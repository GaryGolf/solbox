import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'

interface Props {}
interface State {
    text: string
}

export default class Comment extends React.Component <Props, State> {

    constructor(props:Props){
        super(props)

        this.state={
            text: '',
        }
    }

    render(){
        return  (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.button_label}>X</Text>
                    </TouchableHighlight>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Add Comment</Text>
                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.button_label}>V</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.input_group}>
                    <Text style={styles.label}>   Text comment...</Text>
                    <TextInput
                        style={!this.state.text?[styles.input, styles.empty]:styles.input}
                        keyboardType={'default'}
                        placeholder={'Enter the time'}
                        maxLength={180}
                        value={this.state.text}
                        onChange={e=>this.setState({text:e.nativeEvent.text})}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#512da7',
    },
    title_container: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 20,
        color: '#fff'
    },
    button: {
        // width: '7%',
    },
    button_label: {
        color: '#fff',
        margin: 15
    },
    input_group: {
        width: '100%',
        paddingRight: 20
    },
    label: {
        fontSize: 14,
        fontWeight: '300',
        color: '#777'
    },
    empty: {
       height: 0
    },
    input: {
        height: 40,
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%',
        margin: 10
    }

})