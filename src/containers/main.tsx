import * as React from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

interface Props {
    navigation?: NavigationParams
}
interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#512da7',
    },
    title: {
        color: '#fff'
    },
    menu: {
        margin: 10,
        backgroundColor: 'lightblue',
        padding: 4
    }
})

const menuButton = props => (
    <TouchableHighlight> 
        {/* // style={styles.menu_button}> */}
        <View style={styles.menu}>
            <Text>=</Text>
        </View>
    </TouchableHighlight>
)
export default class Main extends React.Component<Props, State> {
    static navigationOptions:NavigationStackScreenOptions = {
        title: 'SolBox',
        headerLeft: menuButton(null),
        headerStyle: styles.header,
        headerTitleStyle: styles.title
    } 
    render(){
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>Main Screen</Text>
                <Button 
                    onPress={() => navigate('HelloWorld')}
                    title="Hello"
                />
            </View>
        )
    }
}