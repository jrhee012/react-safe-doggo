import Config from 'react-native-config'
import { fetchGetURL } from './fetchCalls';
import log from './logging';

const getURL = (lat, long) => {
    const apiKey = Config.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=${apiKey}`;

    return url;
}

export const getCityName = async (lat, long) => {
    const url = getURL(lat, long);
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