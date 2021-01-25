import { createSlice } from "@reduxjs/toolkit"

const pageSlice = createSlice({
    name: "page",
    initialState: {
        darkMode: false
    },
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {
    toggleDarkMode
} = pageSlice.actions

export const selectPage = state => state.page
export const selectDarkMode = state => selectPage(state).darkMode
export default pageSlice.reducer