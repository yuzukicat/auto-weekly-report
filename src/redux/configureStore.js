import { configureStore } from '@reduxjs/toolkit'
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = configureStore({
        reducer: Reducer,
        initialState
    });
    return store;
}