import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
    static propTypes = {
        days: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        const { days } = this.props;

        return (
            <View>
                <Text>{days.temp.day}°C</Text>
            </View>
        );
    }
}
