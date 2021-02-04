import { createSlice } from "@reduxjs/toolkit"
import { getFromLocalStorage } from "./localStorage/localStorage"

const pageSlice = createSlice({
    name: "page",
    initialState: {
        darkMode: getFromLocalStorage(false),
        skillset: [
            "HTML5",
            "RWD",
            "Accessibility and Semantics",
            "BEM notation",
            "Markdown",
            "npm",
            "CSS3",
            "CSS Grid",
            "CSS Flexbox",
            "JavaScript ES6",
            "Local Storage",
            "Immutability",
            "React",
            "Custom Hooks",
            "Redux and toolkit",
            "Redux Saga",
            "React- Router",
            "Axios",
            "Teamwork",
            "Customer Service"
        ],
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
export const selectSkillset = state => selectPage(state).skillset;
export const selectStatus = state => selectPage(state).status;
export const selectPortfolio = state => selectPage(state).portfolio;
export default pageSlice.reducer;