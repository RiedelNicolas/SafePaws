import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AuthState = {
    status: string | null;  // "checking", "authenticated", "not-authenticated";
    token: string | null;
    email: string | null;
    error: string | null;
};

const initialState: AuthState = {
    status: "not-authenticated",
    token: null,
    email: null,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: AuthState, action: PayloadAction<string | null>) => {
            state.token = null;
            state.email = null;
            state.status = "not-authenticated";
            state.error = action.payload;
        },
        login: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.status = "authenticated";
            state.error = null;
        },
        checkingCredentials: (state: AuthState) => {
            state.status = "checking";
            state.error = null;
        },
    },
});

export const { logout, login, checkingCredentials } = authSlice.actions;
