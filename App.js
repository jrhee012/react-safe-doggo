/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {
    HomeStack,
    SettingsStack,
    SearchStack,
    navigationOptions
} from './screens';

// type Props = {};
// export default class App extends Component {
//     render() {
//         return <RootStack />;
//     }
// }

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchStack,
        Settings: SettingsStack,
    },
    {
        // navigationOptions: navigationOptions('Home'),
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#333333',
            // activeBackgroundColor: '#ffffff',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#f4511e',
            },
        },
    },
);
