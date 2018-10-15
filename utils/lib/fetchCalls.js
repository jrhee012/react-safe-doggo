import Config from 'react-native-config';
import log from './logging';

const fetchGetURL = async url => {
    let result = null;

    try {
        let response = await fetch(url);
        let responseJSON = await response.json();

        if (process.env.NODE_ENV === 'development') {
            log.trace(`fetch result: ${JSON.stringify(responseJSON)}`);
        }

        result = responseJSON;
    } catch (e) {
        log.error(e);
    }

    return result;
}

export const getCityName = async (lat, long) => {
    const apiKey = Config.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=${apiKey}`;

    let cityName = null;
    try {
        let response = await fetchGetURL(url);
        let formattedAddress = response.results[7].formatted_address;
        cityName = formattedAddress;
    } catch (e) {
        log.error(e);
    }

    return cityName;
}

export const getTemperature = async (lat, long) => {
    const apiKey = Config.OPEN_WEATHER_MAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${apiKey}`

    let temp = {};
    try {
        let response = await fetchGetURL(url);
        // console.log('weather: ', response);
        temp = response.main;
    } catch (e) {
        log.error(e);
    }

    return temp;
}

export const webSearch = async query => {
    const apiKey = Config.BING_SEARCH_API_KEY;
    let uriEncoded = encodeURI(query.toString());
    let url = `https://api.cognitive.microsoft.com/bing/v7.0/search?safeSearch=strict&q=${uriEncoded}`;

    console.log('test', url, uriEncoded)
    let result = null;
    try {
        let resp = await fetch(url, {
            method: 'get',
            headers: new Headers({
                'Ocp-Apim-Subscription-Key': apiKey,
            }),
            // body: { q: uriEncoded },
        });
        resp = await resp.json();
        result = resp.webPages.value;
        console.log('search result: ', result);
    } catch (e) {
        console.error(e);
    }

    return result;
}
