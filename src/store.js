import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "./features/homepage/pageSlice"

const store = configureStore({
    reducer: {
        page: pageReducer
    }
});

export default store