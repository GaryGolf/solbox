import * as React from 'react'
import Camera from 'react-native-camera'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'

import Return from '../components/svg/return'

interface Props {
    navigation?: NavigationParams
}
interface State {}

export default class Photo extends React.Component<Props, State> {
    private camera:any
    static navigationOptions = ({navigation}) => ({
        title: 'Photo',
        headerLeft: (
            <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
                 <View style={styles.send}>
                    <Return/>
                </View> 
            </TouchableHighlight>
        ),
        headerStyle: {backgroundColor: '#512da7'} ,
        headerTitleStyle: { color: '#fff'}
    }) 
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
    render(){
        return (
            <View style={styles.container}>
                <Camera
                    ref={cam=>this.camera=cam}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    send: {
        margin: 20
    }
})
