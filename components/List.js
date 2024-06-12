import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import style from '../style';
import axios from 'axios';
import WeatherRow from './weather/Row';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.route.params.city,
            report: null,
            loading: true,
            error: null
        }
        setTimeout(() => this.fetchWeather(), 1000);
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather() {
        const { city } = this.state;
        const apiKey = '94c6cf0868fa5cb930a5e2d71baf0dbf';

        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily`, {
            params: {
                q: city,
                mode: 'json',
                units: 'metric',
                cnt: 10,
                APPID: apiKey
            }
        })
            .then((response) => {
                this.setState({
                    report: response.data,
                    loading: false,
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    error: error,
                    loading: false
                });
            });
    }

    render() {
        const { city, report, loading, error } = this.state;

        if (loading) {
            return (
                <View style={style.viewList}>
                    <ActivityIndicator color={style.color} size='large' />
                </View>
            );
        }

        if (error) {
            return (
                <View style={style.viewList}>
                    <Text style={style.textError}>Erreur: {error.message}</Text>
                </View>
            );
        }

        return (
            <View style={style.viewList}>
                <Text style={style.textResult}>Résultats pour : {city}</Text>
                <FlatList
                    data={report.list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <WeatherRow days={item} index={index} />
                    )}
                />
            </View>
        );
    }
}

// List.navigationOptions = ({ route }) => {
//     const { city } = route.params;

//     return {
//         title: 'Meteo / ' + city,
//     };
// };
