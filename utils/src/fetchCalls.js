export const fetchGetURL = async url => {
    let result = null;

    try {
        let response = await fetch(url);
        let responseJSON = await response.json();

        // console.log('fetch result: ', responseJSON);

        result = responseJSON;
    } catch (e) {
        console.error(e);
    }

    return result;
}

export const fetchSearchQuery = async query => {

}