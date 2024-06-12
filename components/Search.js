import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from '../style';
import { createStackNavigator } from '@react-navigation/stack';
import List from './List';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Montpellier'
        };
    }

    setCity = (text) => {
        this.setState({ city: text });
    }

    submit = () => {
        this.props.navigation.navigate('Result', { city: this.state.city });
    }

    render() {
        return (
            <View style={style.viewSearch}>
                <TextInput
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setCity(text)}
                    style={style.textinputSearch}
                    value={this.state.city}
                />
                <TouchableOpacity style={style.button} onPress={this.submit}>
                    <Text style={style.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="back" component={Search} options={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'blue',
                },
            }} />
            <Stack.Screen
                name="Result"
                component={List}
                options={({ route }) => ({
                    title: 'Méteo / ' + route.params.city,
                    headerShown: true,
                    headerTitleStyle: {
                        textTransform: 'capitalize',
                    }
                })} />
        </Stack.Navigator>
    );
};

export default SearchStack;