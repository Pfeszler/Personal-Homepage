import {select, call, takeLatest} from "redux-saga/effects"
import {selectDarkMode, toggleDarkMode} from "./pageSlice"
import {saveToLocalStorage} from "./localStorage/localStorage"

export function* saveToLocalStorageHandler(){
    const darkMode = yield select(selectDarkMode);
    yield call(saveToLocalStorage, darkMode)
}

export function* pageSaga(){
    yield takeLatest(toggleDarkMode.type, saveToLocalStorageHandler)
}