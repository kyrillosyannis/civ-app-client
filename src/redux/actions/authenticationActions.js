import { useDispatch } from "react-redux";
import { authenticate } from "../../api/authenticationApi";
import { authenticateSuccess } from "../reducers/authenticationReducer";

export function login(authRequest) {

    return function (dispatch) {

        return authenticate(authRequest)
            .then((user) => {
                if (user === undefined) {
                    // dispatch(authenticateFailure());
                    console.log('auth call failed');
                } else {
                    setTimeout(() => {
                        console.log('in action');
                        dispatch(authenticateSuccess(user));
                    }, 2000);
                }
            })
            .catch(error => {
                // dispatch(apiCallFailure());
                throw error;
            });
    };
}