import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

export const updateStyles = () => {
    const hourNow = new Date().getHours();
    const light  = '#FFFFFF';
    const dark = '#333333';
    const baseColor = '#f4511e';

    let defaultStyles = {
        container: {
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: light,
        },
        title: {
            fontSize: 25,
            textAlign: 'left',
            color: dark,
            margin: 20,
        },
        body: {
            fontSize: 15,
            textAlign: 'left',
            color: dark,
            margin: 20,
        },
        bodyCentered: {
            fontSize: 15,
            textAlign: 'center',
            color: dark,
            margin: 20,
        },
        image: {
            // flex: 0.5,
            // height: undefined,
            // width: undefined,
            alignSelf: 'center',
            marginLeft: 20,
            marginRight: 20,
        },
        searchboxTextInput: {
            marginLeft: 20,
            marginRight: 20,
            fontSize: 15,
        },
        searchboxButton:{
            marginRight: 20,
        },
        input: {
            backgroundColor: '#DCDCDC',
            marginLeft: 20,
            marginRight: 10,
            marginTop: 20,
            // marginBottom: 20,
            fontSize: 15,
            height: 40,
            padding: 10,
            borderColor: '#DCDCDC',
            borderWidth: 1,
            borderRadius: 10,
        },
        submitButton: {
            backgroundColor: baseColor,
            padding: 10,
            marginRight: 20,
            marginTop: 20,
            // marginBottom: 20,
            height: 40,
            borderColor: baseColor,
            borderWidth: 1,
            borderRadius: 10,
        },
        submitButtonText: {
            color: 'white'
        },
        searchPageTrendingText: {
            margin: 20,
            fontSize: 30,
            fontWeight: 'bold',
        },
        searchPageBoxView: {
            flexDirection: 'row',
            height: 150,
        },
        searchPageBoxLeft: {
            flex: 0.5,
            alignItems: 'center',
            backgroundColor: baseColor,
            padding: 10,
            marginBottom: 10,
            marginRight: 5,
            marginLeft: 20,
            borderColor: baseColor,
            borderWidth: 1,
            borderRadius: 10,
        },
        searchPageBoxRight: {
            flex: 0.5,
            alignItems: 'center',
            backgroundColor: baseColor,
            padding: 10,
            marginLeft: 5,
            marginRight: 20,
            marginBottom: 10,
            borderColor: baseColor,
            borderWidth: 1,
            borderRadius: 10,
        },
    };

    // if (hourNow < 17 || hourNow < '17') {
    //     defaultStyles.container.backgroundColor = light;
    //     defaultStyles.title.color = dark;
    //     defaultStyles.body.color = dark;
    // } else {
    //     defaultStyles.container.backgroundColor = dark;
    //     defaultStyles.title.color = light;
    //     defaultStyles.body.color = light;
    // }

    return StyleSheet.create(defaultStyles);
}

export const navigationOptions = (title, nextPageTitle, that) => {
    let options = {
        title: null,
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    if (title) {
        options.title = title;
    }
    console.log(that)
    if (nextPageTitle && that) {
        options.headerRight = (
            <Button
                onPress={that.props.navigation.navigate('Results')}
                title={nextPageTitle}
                color="#fff"
            />
        )
    }
    return options;
}
