import { StyleSheet } from 'react-native';

/*
 * #F5FCFF #333333
 */
// const day  = '#F5FCFF';
// const dark = '#333333';
// let defaultStyles = {
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     text: {
//         fontSize: 15,
//         textAlign: 'center',
//         color: '#333333',
//         margin: 10,
//     },
// };

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

export const updateStyles = () => {
    const hourNow = new Date().getHours();
    const light  = '#FFFFFF';
    const dark = '#333333';

    let defaultStyles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: light,
        },
        text: {
            fontSize: 15,
            textAlign: 'center',
            color: dark,
            margin: 10,
        },
    };

    if (hourNow < 17 || hourNow < '17') {
        defaultStyles.container.backgroundColor = light;
        defaultStyles.text.color = dark;
    } else {
        defaultStyles.container.backgroundColor = dark;
        defaultStyles.text.color = light;
    }

    return StyleSheet.create(defaultStyles);
}
