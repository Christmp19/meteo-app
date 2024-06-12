import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import FadeInView from '../animation/fadeInView';
import style from '../../style';

export default class Row extends React.Component {
    static propTypes = {
        days: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    day() { 
        let day = moment(this.props.days.dt * 1000).format('ddd');
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
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
            return null;
        }
    }

    date() {
        let day = moment(this.props.days.dt * 1000).format('DD/MM');
        return (
            <Text style={[style.white]}>{day}</Text>
        )
    }

    render() {
        const { days } = this.props;

        if (this.props.index === 0) {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={style.firstView}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                            <Text style={{ color: 'white' }}>{this.day()} {this.date()}</Text>
                            <Text>{this.icon(90)}</Text>
                        </View>
                        <View>
                            <Text style={[style.temp, { fontSize: 35 }]}>
                                {Math.round(days.temp.day)}°C
                            </Text>
                            <Text style={{ color: 'white', fontSize: 15 }}>
                                {moment(this.props.days.timezone).format('HH:mm')}
                            </Text>
                        </View>

                    </View>
                </FadeInView>
            );

        } else {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={style.view}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Text>{this.icon()}</Text>
                            <Text style={style.day}>{this.day()} {this.date()}</Text>
                        </View>
                        <Text style={style.temp}>{Math.round(days.temp.day)}°C</Text>

                    </View>
               </FadeInView>
            );
        }
    }
}