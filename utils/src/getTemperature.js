import { fetchGetURL } from './fetchCalls';

const getURL = (lat, long) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=6f31a9738232e5edd96eb2bbc1edd406`

    return URL;
}

export const getTemperature = async (lat, long) => {
    const url = getURL(lat, long);
    let temp = {};

    try {
        let response = await fetchGetURL(url);
        // console.log('weather: ', response);
        temp = response.main;
    } catch (e) {
        console.error(e);
    }

    return temp;
}