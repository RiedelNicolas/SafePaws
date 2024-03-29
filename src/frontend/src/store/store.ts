import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../features/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedAuth = persistReducer(persistConfig, authSlice.reducer)


export const store = configureStore({
    reducer: {
        auth: persistedAuth
    },
});


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
