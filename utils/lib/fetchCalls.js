import log from './logging';

export const fetchGetURL = async url => {
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

export const fetchSearchQuery = async query => {

}