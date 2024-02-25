import { headerAttributes, handleResponse, handleError } from "./apiUtils";

export const createUser = user => {
    return fetch('/api/users', {
        headers: { ...headerAttributes },
        method: 'POST',
        body: JSON.stringify(user),
    })
        .then(handleResponse)
        .catch(handleError);
};
