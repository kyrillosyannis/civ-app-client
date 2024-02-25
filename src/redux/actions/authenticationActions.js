import { useDispatch } from "react-redux";
import { authenticate, logout } from "../../api/authenticationApi";
import { authenticateSuccess, logoutSuccess } from "../reducers/authenticationReducer";

export function login(authRequest) {

    return function (dispatch) {

        return authenticate(authRequest)
            .then((user) => {
                if (user === undefined) {
                    // dispatch(authenticateFailure());
                    console.log('auth call failed');
                } else {
                    dispatch(authenticateSuccess(user));
                }
            })
            .catch(error => {
                // dispatch(apiCallFailure());
                throw error;
            });
    };
}

export const logoutUser = () => {
    return async dispatch => {
        try {
            const logoutResponse = await logout();
            dispatch(logoutSuccess());
        } catch (error) {
            //dispatch apiCallFailure
            throw error;
        }
    };
};
