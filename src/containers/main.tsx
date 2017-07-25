import * as React from 'react'
import { StyleSheet, View, TouchableHighlight, ScrollView} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import JobHeader from '../components/job-header'
import JobBody from '../components/job-body'
import JobActions from '../components/job-actions'
import Menu from '../components/svg/menu'

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
                    <Menu/>
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
            <ScrollView>
                <View style={styles.container}>
                    <JobHeader
                        //status="Depot Finished"
                        status="Initial"
                        date={new Date(2017,8,29,11,44)}
                    />
                    <JobBody
                        name="ALVARO TRANSPORT PTY LTD"
                        address="90 YARRAWA STREET PRESTONS 2170"
                        link="Depot Accepted"
                    />
                    <JobActions/>
                </View>
                <View style={styles.container}>
                    <JobHeader
                        status="Accepted"
                        date={new Date(2017,8,29,11,45)}
                    />
                    <JobBody
                        name="ALVARO TRANSPORT PTY LTD"
                        address="90 YARRAWA STREET PRESTONS 2170"
                        link="Depot Start"
                    />
                    <JobActions/>
                </View>
                 <View style={styles.container}>
                    <JobHeader
                        status="Depot Start"
                        date={new Date(2017,8,29,12,7)}
                    />
                    <JobBody
                        name="ALVARO TRANSPORT PTY LTD"
                        address="90 YARRAWA STREET PRESTONS 2170"
                        link="Depot Start"
                    />
                    <JobActions/>
                </View>
                 <View style={styles.container}>
                    <JobHeader
                        status="Depot Finished"
                        date={new Date(2017,8,29,13,19)}
                    />
                    <JobBody
                        name="ALVARO TRANSPORT PTY LTD"
                        address="90 YARRAWA STREET PRESTONS 2170"
                        link="Depot Finished"
                    />
                    <JobActions/>
                </View>
                {/* <Text>Main Screen</Text>
                <Button 
                    onPress={() => navigate('HelloWorld')}
                    title="Hello"
                />
                <Text>SignIn Screen</Text>
                <Button 
                    onPress={() => navigate('SignIn')}
                    title="SignIn"
                /> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menu: {
        margin: 10,
        padding: 4
    }
})