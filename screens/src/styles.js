import { StyleSheet } from 'react-native';

export const updateStyles = () => {
    const hourNow = new Date().getHours();
    const light  = '#FFFFFF';
    const dark = '#333333';

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
    };

    if (hourNow < 17 || hourNow < '17') {
        defaultStyles.container.backgroundColor = light;
        defaultStyles.title.color = dark;
        defaultStyles.body.color = dark;
    } else {
        defaultStyles.container.backgroundColor = dark;
        defaultStyles.title.color = light;
        defaultStyles.body.color = light;
    }

    return StyleSheet.create(defaultStyles);
}

/*
headerStyle: {
  backgroundColor: '#f4511e',
},
headerTintColor: '#fff',
headerTitleStyle: {
  fontWeight: 'bold',
},
 */
export const navigationOptions = title => {
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

    return options;
}