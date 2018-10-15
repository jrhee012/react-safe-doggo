import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { updateStyles, navigationOptions } from './styles';

class SettingsScreen extends Component {
    static navigationOptions = navigationOptions('Settings');

    render() {
        const styles = updateStyles();

        return (
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

export const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    // Details: DetailsScreen,
});
