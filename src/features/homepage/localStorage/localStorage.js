export const saveToLocalStorage = (state) => {
    localStorage.setItem("darkMode", JSON.stringify(state));
}

export const getFromLocalStorage = (initialState) => JSON.parse(localStorage.getItem("darkMode")) || initialState;