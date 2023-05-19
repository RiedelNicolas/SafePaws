import { checkingCredentials, logout, login } from "./";
import type { AppDispatch } from "../store";
import api from "../api/api";
import { AxiosError } from "axios";

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

            if (error instanceof AxiosError && error.code === "ERR_NETWORK") {
                dispatch(logout("Connection Error."));
            } else {
                dispatch(logout("It seems your credentials are incorrect or invalid."));
            }
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

            if (error instanceof AxiosError && error.code === "ERR_NETWORK") {
                dispatch(logout("Connection Error."));
            } else {
                dispatch(logout("It seems your credentials are incorrect or invalid."));
            }
        }

    }
}
