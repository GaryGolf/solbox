import * as React from 'react'
import { StyleSheet, View, Text} from 'react-native'

interface Props {}
interface State {}

export default class Main extends React.Component<Props, State> {
    render(){
        return (
            <View style={styles.container}>

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
    }
})