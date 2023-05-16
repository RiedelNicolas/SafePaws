import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    token: string | null;
    email: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    email: null,
    loading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.email = null;
            state.loading = false;
            state.error = null;
        },
        login : (state, action : PayloadAction<{email : string, password:string}>) => {
            state.token = action.payload.password; // TODO, This is just a mock. Later, the request 
            state.email = action.payload.email;
            state.loading = false;
            state.error = null;
        }
    },
});