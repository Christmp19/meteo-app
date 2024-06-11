import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import style  from '../style'

export default class About extends React.Component {
    search() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.viewAbout}>
                <Text style={style.titleAbout}>A propos de l'application</Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a laboriosam culpa facere, excepturi, ab voluptatum eius laborum dolores perferendis tempora aliquam quis accusantium ipsum quaerat. Itaque iure officiis expedita!
                </Text>
                <TouchableOpacity style={style.button} onPress={() => this.search()}>
                    <Text style={style.buttonText}>Rechercher une ville</Text>
                </TouchableOpacity>
                {/* <Button style={styles.button} onPress={() => this.search()} title='Rechercher' /> */}
            </View>
        )
    }
}