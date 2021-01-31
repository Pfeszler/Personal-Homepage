import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"
import { pageSaga } from './features/homepage/pageSaga';
import pageReducer from "./features/homepage/pageSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        page: pageReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(pageSaga)

export default store