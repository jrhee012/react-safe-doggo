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
import { HomeStack, SettingsStack } from './screens';

// type Props = {};
// export default class App extends Component {
//     render() {
//         return <RootStack />;
//     }
// }

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        /* Other configuration remains unchanged */
    }
);
