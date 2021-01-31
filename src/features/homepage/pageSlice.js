import { createSlice } from "@reduxjs/toolkit"
import { getFromLocalStorage } from "./localStorage/localStorage"

const pageSlice = createSlice({
    name: "page",
    initialState: {
        darkMode: getFromLocalStorage(false),
        status: "loading",
        portfolio: []
    },
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode;
        },
        fetchSuccess: (state, { payload }) => {
            state.portfolio = payload
            state.status = "success";
        },
        fetchFailed: state => {
            state.status = "failed"
        }
    }
});

export const {
    toggleDarkMode,
    fetchSuccess,
    fetchFailed,
} = pageSlice.actions;

export const selectPage = state => state.page;
export const selectDarkMode = state => selectPage(state).darkMode;
export const selectStatus = state => selectPage(state).status;
export const selectPortfolio = state => selectPage(state).portfolio;
export default pageSlice.reducer;