import {
    getCityName,
    getTemperature,
    webSearch
} from './lib/fetchCalls';
// import { getTemperature } from './lib/getTemperature'
import log from './lib/logging';

module.exports = { getCityName, getTemperature, webSearch, log };
