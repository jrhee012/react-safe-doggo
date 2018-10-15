/* eslint-disable no-console */
const trace = message => {
    console.log(message);
}

const error = error => {
    console.error(error);
}

export default { trace, error };