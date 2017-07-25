import * as React from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import JobHeader from '../components/job-header'

interface Props {
    navigation?: NavigationParams
}
interface State {}


export default class Main extends React.Component<Props, State> {
    static navigationOptions = ({navigation}) => ({
        title: 'SolBox',
        headerLeft: (
            <TouchableHighlight onPress={()=>navigation.navigate('DrawerOpen')}> 
                <View style={styles.menu}>
                    <Text style={styles.hamburger}>=</Text>
                </View>
            </TouchableHighlight>
        ),
        headerStyle: {backgroundColor: '#512da7'} ,
        headerTitleStyle: { color: '#fff'}
    }) 
    openDrawer(){
        this.props.navigation.navigate('DrawerOpen')
    }
    render(){
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <JobHeader
                    status="Depot Finished"
                    date={new Date(2017,8,29,11,44)}
                />
                <Text>Main Screen</Text>
                <Button 
                    onPress={() => navigate('HelloWorld')}
                    title="Hello"
                />
                <Text>SignIn Screen</Text>
                <Button 
                    onPress={() => navigate('SignIn')}
                    title="SignIn"
                />
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
    },
    menu: {
        margin: 10,
        padding: 4
    },
    hamburger: {
        fontSize: 30,
        color: '#fff'
    }
})