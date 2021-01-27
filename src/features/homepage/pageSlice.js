import { createSlice } from "@reduxjs/toolkit"

const pageSlice = createSlice({
    name: "page",
    initialState: {
        darkMode: false,
        status: "loading",
        portfolio: []
    },
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode;
        },
        fetchSucces: (state, { payload }) => {
            state.status = "succes";
            state.portfolio = payload
        },
        fetchFailed: state => {
            state.status = "failed"
        }
    }
});

export const {
    toggleDarkMode,
    fetchSucces,
    fetchFailed,
} = pageSlice.actions;

export const selectPage = state => state.page;
export const selectDarkMode = state => selectPage(state).darkMode;
export const selectStatus = state => selectPage(state).status;
export const selectPortfolio = state => selectPage(state).Portfolio;
export default pageSlice.reducer;