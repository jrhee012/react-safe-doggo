import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { updateStyles, navigationOptions } from './styles';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // cityName: null,
            // latitude: null,
            // longitude: null,
            // temperature: null,
            // searchResultVisible: false,
            // searchComplete: false,
            searchQuery: null,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: false});
    }

    static navigationOptions = navigationOptions('Search');

    submitText() {
        console.log('search: ', this.state.searchQuery);
        this.props.navigation.navigate('Results', {
            searchQuery: this.state.searchQuery,
        });
    }

    render() {
        const styles = updateStyles();

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
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
                <Text style={styles.body}>
                    Search Screen
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.75 }}>
                        <TextInput
                            style={styles.searchboxTextInput}
                            containerStyle={{flexGrow: 1}}
                            placeholder="Type here to translate!"
                            // multiline={true}
                            onChangeText={(text) => this.setState({searchQuery: text})}
                            // onSubmitEditing={this.submitText()}
                        />
                    </View>
                    <View style={{ flex: 0.25 }}>
                        <Button
                            style={styles.searchboxButton}
                            title='Search'
                            onPress={() => this.submitText()}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', height: 200 }}>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text>HI</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text>HI</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 200 }}>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text>HI</Text>

                        </View>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text>HI</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchQuery: props.navigation.getParam('searchQuery', ''),
            error: null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: false});
    }

    static navigationOptions = navigationOptions('Results');

    render() {
        const styles = updateStyles();

        console.log('result state: ', this.state);

        return (
            <View style={styles.container}>
                <View style={{ height: 50, padding: 20 }}/>
                <Text style={styles.bodyCentered}>
                    Loading...
                </Text>
                <ActivityIndicator/>
            </View>
        )
    }
}

export const SearchStack = createStackNavigator({
    Search: SearchScreen,
    Results: ResultsScreen,
});
