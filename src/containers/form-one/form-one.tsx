import * as React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'

interface Props {}
interface State {
    time: string
    text: string
    number: string
}

export default class FormOne extends React.Component <Props, State> {

    constructor(props:Props){
        super(props)

        this.state={
            time: '',
            text: '',
            number: ''
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
                        <Text style={styles.title}>Title</Text>
                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.button_label}>V</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.input_group}>
                     <TextInput
                        style={!this.state.time.length?[styles.input,styles.placeholder]:styles.input}
                        keyboardType={'numeric'}
                        placeholder={'Enter the time'}
                        maxLength={60}
                        value={this.state.time}
                        onChange={e=>this.setState({time:e.nativeEvent.text})}
                    />
                    <TextInput
                        value={this.state.text}
                        style={!this.state.text.length?[styles.input,styles.placeholder]:styles.input}
                        keyboardType={'default'}
                        placeholder={'Enter the text'}
                        maxLength={60}
                        onChange={e=>this.setState({text:e.nativeEvent.text})}
                    />
                    <TextInput
                        value={this.state.number}
                        style={!this.state.number.length?[styles.input,styles.placeholder]:styles.input}
                        keyboardType={'numeric'}
                        placeholder={'Enter the number'}
                        maxLength={60}
                        onChange={e=>this.setState({number:e.nativeEvent.text})}
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
    placeholder: {
        fontSize: 14,
        fontWeight: '300',
        color: '#777'
    },
    input: {
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%',
        margin: 10
    }

})