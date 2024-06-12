import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default class Row extends React.Component {
    static propTypes = {
        days: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    day() { 
        let day = moment(this.props.days.dt * 1000).format('ddd');
        return (
            <Text style={[styles.white, styles.bold]}>{day.toUpperCase()}</Text>
        )
    }

    icon(size=35) {
        if (this.props.days.weather && this.props.days.weather.length > 0) {
            const type = this.props.days.weather[0].main.toLowerCase();

            let image;

            switch (type) {
                case 'clouds':
                    image = require('./icons/cloud-sun.png')
                    break;
                case 'rain':
                    image = require('./icons/cloud-rain.png')
                    break;
                default:
                    image = require('./icons/sun.png')
                    break;
            }

            return <Image source={image} style={{ width: size, height: size }} />;
        } else {
            return null; // Ou tout autre composant ou texte que vous souhaitez afficher dans ce cas
        }
    }

    date() {
        let day = moment(this.props.days.dt * 1000).format('DD/MM');
        return (
            <Text style={[styles.white]}>{day}</Text>
        )
    }

    render() {
        const { days } = this.props;

        if (this.props.index === 0) {
            return (
                <View style={styles.firstView}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                        <Text style={{ color: 'white' }}>{this.day()} {this.date()}</Text>
                        <Text>{this.icon(90)}</Text>
                    </View>
                    <Text style={[styles.temp, {fontSize: 35}]}>{Math.round(days.temp.day)}°C</Text>

                </View>
            );

        } else {
            return (
                <View style={styles.view}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text>{this.icon()}</Text>
                        <Text style={styles.day}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={styles.temp}>{Math.round(days.temp.day)}°C</Text>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    firstView: {
        backgroundColor: '#28A8F6',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    temp: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    day: {

    }
});
