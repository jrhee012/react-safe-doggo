import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { updateStyles } from './styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    static navigationOptions = {
        title: 'Home',
    };

    // navigationOptions.title = 'test';

    render() {
        console.log('state....!', this.state);
        console.log(this.props);

        return (
            <View style={ updateStyles().container }>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export const HomeStack = createStackNavigator({
    Home: HomeScreen,
    // Details: DetailsScreen,
});
