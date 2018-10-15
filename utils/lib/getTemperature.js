import Config from 'react-native-config'
import { fetchGetURL } from './fetchCalls';
import log from './logging';

const getURL = (lat, long) => {
    const apiKey = Config.OPEN_WEATHER_MAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${apiKey}`

    return url;
}

export const getTemperature = async (lat, long) => {
    const url = getURL(lat, long);
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