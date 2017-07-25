import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'

declare type JobStatus = 'Initial' | 'Accepted' | 'Depot Start' | 'Depot Finished'
interface Props {
    status: JobStatus
    date: Date
}
interface State {}

const getTime = (date:Date):string => {
    const bigHours = date.getHours()
    const minutes = date.getMinutes()
    const hours = bigHours>12? bigHours-12:bigHours
    const am = bigHours>12? 'pm':'am'
    return `${hours}:${minutes} ${am}`
}

const getColor = (status:JobStatus):string => {
    if(status == 'Initial') return '#000'
    return '#fff'
}

const getBackgroundColor = (status:JobStatus):string => {
    switch(status){
        case 'Initial' :
            return '#ffdf0b'
        case 'Accepted' :
            return '#36afee'
        case 'Depot Start' :
            return '#4cb684'
        case 'Depot Finished' :
            return '#7049c9'
        default :
    }
    return '#000'
}

const getMonth = (date:Date):string => ['January', 'February', 'Marh', 'Apriel', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]


export default class JobHeader extends React.Component<Props, State> {

    render(){
        
        const {status, date} = this.props
        const time = getTime(date)
        const month = getMonth(date)
        const color = getColor(status)
        const backgroundColor = getBackgroundColor(status)

        return (
            <View style={[styles.container,{backgroundColor}]}>
                <View>
                     <View style={styles.status_row}>
                        <Text style={[styles.status,{color}]}>{status}</Text>
                    </View>
                     <View>
                        <Text style={[styles.time,{color}]}>{time}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.month_container}>
                        <Text style={styles.month}>{month}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.day}>{date.getDate()}</Text>
                        <Text style={styles.year}>{date.getFullYear()}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        // maxHeight: '30%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    status_row: {
        marginBottom: 20
    },
    status: {
        fontSize: 22
    },
    time: {
        fontSize: 18
    },
    box: {
        width: 80,
        height: 90,
    //     backgroundColor: '#fff'
    },
    month_container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2
    },
    month: {
        color: '#512da7'
    },
    date_container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    day: {
        fontSize: 22,
        marginTop: 6,
        color: '#512da7'
    },
    year: {
        fontSize: 14,
        margin: 1,
        color: '#512da7'
    }

})
