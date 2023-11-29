export const C_APP_API_URL = 'http://localhost:8080';

export const handleResponse = async response => {
    if (response.ok) return response.json();
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.text();
        throw new Error(error);
    }
    await handleResponseErrors(response);
};

const handleResponseErrors = async (response) => {
    const error = await response.text();
    throw new Error(error);
};

export function handleError(error) {
    // eslint-disable-next-line no-console
    if (error.response != null) {
        throw new Error(error.response.data.message);   
    }
}
