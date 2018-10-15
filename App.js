/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator } from 'react-navigation';
import {
    HomeStack,
    SettingsStack,
    SearchStack,
    navigationOptions
} from './screens';

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
