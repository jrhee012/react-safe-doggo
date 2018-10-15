import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    Button,
    ActivityIndicator
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { updateStyles, navigationOptions } from './styles';
import { getCityName, getTemperature } from '../../utils'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            cityName: null,
            latitude: null,
            longitude: null,
            temperature: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            async position => {
                const cityName = await getCityName(
                    position.coords.latitude,
                    position.coords.longitude,
                );

                const temp = await getTemperature(
                    position.coords.latitude,
                    position.coords.longitude,
                );

                // console.log('temp...! ', temp);

                this.setState({
                    isLoading: false,
                    cityName: cityName ? cityName : null,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    temperature: temp,
                    error: null,
                })
            },
            error => {
                this.setState({
                    error: error.message,
                })
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            },
        )
    }

    static navigationOptions = navigationOptions('Home');

    render() {
        const styles = updateStyles();

        if (this.state.isLoading) {
            return (
                <View style={ styles.container }>
                    <View style={{ height: 50, padding: 20 }}/>
                    <Text style={styles.bodyCentered}>
                        Loading...
                    </Text>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    {this.state.cityName}
                </Text>
                <View>
                    <Image
                        style={styles.image}
                        resizeMode='cover'
                        source={require('../../assets/img/dog.gif')}
                    />
                </View>
                <Text style={styles.body}>
                    Current Temperature: {this.state.temperature.temp} {'\u00b0'}F
                </Text>
            </ScrollView>
        );
    }
}

export const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    },
);
