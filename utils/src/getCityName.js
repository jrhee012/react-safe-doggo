import { fetchGetURL } from './fetchCalls';

const getURL = (lat, long) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyAPrvzSC1NSyD5x5GIXi33wlkPa6-HL0Ac`;
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
        console.error(e);
    }

    return cityName;
}