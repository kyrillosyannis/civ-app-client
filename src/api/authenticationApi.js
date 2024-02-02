import { C_APP_API_URL, handleResponse, handleError } from "./apiUtils";

// const BASE_URL = C_APP_API_URL + '/api/petitions';
const BASE_URL = '/api/petitions';

const headerAttributes = {
    Accept: 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8',
};

export const authenticate = authRequest => {
    return fetch('/api/authenticate', {
        headers: { ...headerAttributes },
        method: 'POST',
        body: JSON.stringify(authRequest),
    })
        .then(handleResponse)
        .catch(handleError);
};