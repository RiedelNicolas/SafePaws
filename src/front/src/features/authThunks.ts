import { checkingCredentials, logout, login } from "./";
import type { AppDispatch } from "../store";

export const checkingAuthentication = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, username }:
    { email: string, password: string, username: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            // Integrar api
            // const { data } = await api.post('/auth/new', { email, password, username });
            const data = {
                token: "123456qwerty",
                password: password,
                email: email,
                username: username
            }

            localStorage.setItem("token", data.token);

            /* Emulate conection delay */
            setTimeout(() => {

                dispatch(login({
                    status: "authenticated",
                    token: data.token,
                    email: data.email,
                    error: null
                }));

            }, 2000);

        } catch (error) {
            console.log(error);
            dispatch(logout("Error during sign up"));
        }
    }
}

export const startLoginWithEmailPassword = ({ email, password }:
    { email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        try {
            // Integrar api
            // const { data } = await api.post('/auth', { email, password });
            const data = {
                token: "123456qwerty",
                password: password,
                email: email
            }

            localStorage.setItem("token", data.token);

            /* Emulate conection delay */
            setTimeout(() => {

                dispatch(login({
                    status: "authenticated",
                    token: data.token,
                    email: data.email,
                    error: null

                }));

            }, 2000);

        } catch (error) {
            console.log(error);
            dispatch(logout("Error during sign in"));
        }

    }
}
