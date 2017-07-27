import * as React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

interface Props {
    title: string
    value?: string
    autoFocus?: boolean
    onChangeText?(text:string):void
}
interface State {
    text: string
    focused: boolean
}

export default class HiddenInput extends React.Component <Props, State> {

    private input: any

    constructor(props:Props){
        super(props)

        this.state = {
            text: props.value || '',
            focused: props.autoFocus || false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(state=>{
            const text = nextProps.value || state.text
            const focused = nextProps.autoFocus || false
            return {text,focused}
        })
    }

    render(){
        const {text, focused} = this.state
        const {title, value, autoFocus, onChangeText} = this.props
        return (
            <View style={styles.container}> 
                <Text style={styles.label} onPress={()=>this.input.focus()}>{title}</Text>
                <TextInput
                    style={!!text||focused?styles.input:styles.empty}
                    ref={input=>this.input=input}
                    keyboardType={'default'}
                    value={value}
                    autoFocus={autoFocus}
                    onChangeText={text=>onChangeText && onChangeText(text)}
                    onChange={e=>this.setState({text:e.nativeEvent.text})}
                    onFocus={()=>this.setState({focused:true})} 
                    onBlur={()=>this.setState({focused:false})} 
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 18,
        justifyContent: 'flex-start',
        fontWeight: '300',
        marginTop: 15,
        color: '#bbb'
    },
    empty: {
       height: 0,
       color: '#000'
    },
    input: {
        fontSize: 24,
        fontWeight: '800',
        color: '#512da7',
        width: '100%',
    },
})