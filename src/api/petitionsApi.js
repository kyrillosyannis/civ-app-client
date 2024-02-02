import { C_APP_API_URL, handleError, handleResponse } from "./apiUtils";

// const BASE_URL = C_APP_API_URL + '/petitions';
const BASE_URL = '/api/petitions';

const headerAttributes = {
    Accept: 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8',
};

export const save = petition => {
    return fetch(BASE_URL, {
        headers: { ...headerAttributes},
        method: 'POST',
        body: JSON.stringify(petition),
    })
        .then(handleResponse)
        .catch(handleError);
};

export const fetchAll = () => {
    return fetch(BASE_URL, {
        headers: { ...headerAttributes },
        method: 'GET',
        credentials: 'same-origin',
    })
        .then(handleResponse)
        .catch(handleError);
};

export const sign = petitionId => {
    return fetch(`${BASE_URL}/${petitionId}/signatures`, {
        headers: { ...headerAttributes },
        method: 'POST',
    })
        .then(handleResponse)
        .catch(handleError);
};
