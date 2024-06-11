import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity = (text) => {
        this.setState({ city: text });
    }

    render() {
        return (
            <TextInput
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setCity(text)}
                style={styles.textinput}
                value={this.state.city}
                // placeholder="Enter your city"
                // placeholderTextColor="red"
                // selectionColor="green"
            />
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        height: 40,
        width: '80%',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 20,
        color: 'red'
    }
})