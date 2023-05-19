import { checkingCredentials, logout, login } from "./";
import type { AppDispatch } from "../store";
import api from "../api/api";

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
            const { data } = await api.post('/users/register', { email, password, username });

            localStorage.setItem("token", data.token);

            /* Emulate conection delay */
            setTimeout(() => {

                dispatch(login({
                    status: "authenticated",
                    token: data.token,
                    email: data.email,
                    error: null
                }));

            }, 1000);

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
            const { data } = await api.post('/users/login', { email, password });

            localStorage.setItem("token", data.token);

            /* Emulate conection delay */
            setTimeout(() => {

                dispatch(login({
                    status: "authenticated",
                    token: data.token,
                    email: email,
                    error: null

                }));

            }, 1000);

        } catch (error) {
            console.log(error);
            dispatch(logout("Error during sign in"));
        }

    }
}
