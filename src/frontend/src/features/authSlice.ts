import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../api/api";



export const login = createAsyncThunk< AuthState, { email: string, password: string }, {rejectValue : string}>(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const { data } = await api.post('/users/login', { email, password });
            localStorage.setItem("token", data.token);
            return {
                status: "authenticated",
                token: data.token,
                email: data.mail,
                username: data.username,
                phoneNumber : data.phoneNumber,
                error: null
            };
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError && error.code === "ERR_NETWORK") {
                return thunkAPI.rejectWithValue("Connection Error.");
            } else {
                return thunkAPI.rejectWithValue("It seems your credentials are incorrect or invalid.");
            }
        }
    }
)

export const register = createAsyncThunk< AuthState, { email: string, password: string, username: string, phoneNumber : string }, {rejectValue : string}>(
    'auth/register',
    async ({ email, password, username, phoneNumber }, thunkAPI) => {
        try {
            const { data } = await api.post('/users/register', { email, password, username, phoneNumber });
            localStorage.setItem("token", data.token);
            return {
                status: "authenticated",
                token: data.token,
                email: data.mail,
                username: data.username,
                phoneNumber : data.phoneNumber,
                error: null
            };
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError && error.code === "ERR_NETWORK") {
                return thunkAPI.rejectWithValue("Connection Error.");
            } else {
                return thunkAPI.rejectWithValue("It seems your credentials are incorrect or invalid.");
            }
        }
    }
)

export type AuthState = {
    status: "checking" | "authenticated" | "not-authenticated";
    token: string | null;
    email: string | null;
    error: string | null;
    username: string | null;
    phoneNumber : string | null;
};

const initialState: AuthState = {
    status: "not-authenticated",
    token: null,
    email: null,
    error: null,
    username: null,
    phoneNumber : null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: AuthState, action: PayloadAction<string | undefined>) => {
            state.token = null;
            state.email = null;
            state.status = "not-authenticated";
            state.error = action.payload?? null;
        },
        clearError: (state: AuthState) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = "checking";
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = "authenticated";
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.phoneNumber = action.payload.phoneNumber;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = "not-authenticated";
            state.error = action.payload?? null;
        });
        builder.addCase(register.pending, (state) => {
            state.status = "checking";
            state.error = null;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = "authenticated";
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.phoneNumber = action.payload.phoneNumber;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.status = "not-authenticated";
            state.error = action.payload?? null;
        });
    }
});

export const { logout, clearError } = authSlice.actions;
