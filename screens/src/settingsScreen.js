import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { styles } from './styles';

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={ styles.container }>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

export const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    // Details: DetailsScreen,
});
