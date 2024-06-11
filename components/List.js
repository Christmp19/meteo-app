import React from 'react';
import { View, Text } from 'react-native';
import style from '../style'

export default class List extends React.Component {
    render() {
        const { route } = this.props;
        const { city } = route.params;

        return (
            <View style={style.viewList}>
                <Text style={style.viewList}>Résultats pour : {city}</Text>
            </View>
        );
    }
}

List.navigationOptions = ({ route }) => {
    const { city } = route.params;

    return {
        title: 'Meteo / ' + city,
    };
}
