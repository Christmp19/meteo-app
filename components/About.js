import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>A propos de moi</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a laboriosam culpa facere, excepturi, ab voluptatum eius laborum dolores perferendis tempora aliquam quis accusantium ipsum quaerat. Itaque iure officiis expedita!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        color: 'blue'
    }
})