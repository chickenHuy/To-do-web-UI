import { ACCOUT_INFORMATION, COVER_SHEET_CHANGE, FILTER_INFORMATION_CHANGE, LIST_TASK_NAGIVATE_CHANGE, LOGIN_INFORMATION_CHANGE, REGISTER_INFORMATION_CHANGE, SHOW_OVERVIEW, SHOW_TASK_SELECTOR_CHANGE, TODO_INFORMATION_CHANGE } from "./actionTypes"

export const loginInformationChange = (data) => {
    return {
        type: LOGIN_INFORMATION_CHANGE,
        payload: data
    }
}

export const registerInformationChange = (data) => {
    return {
        type: REGISTER_INFORMATION_CHANGE,
        payload: data
    }
}

export const accoutInformation = (data) => {
    return {
        type: ACCOUT_INFORMATION,
        payload: data
    }
}

export const todoInformationChange = (data) => {
    return {
        type: TODO_INFORMATION_CHANGE,
        payload: data
    }
}

export const filterInformationChange = (data) => {
    return {
        type: FILTER_INFORMATION_CHANGE,
        payload: data
    }
}

export const listTaskNavigateChange = (data) => {
    return {
        type: LIST_TASK_NAGIVATE_CHANGE,
        payload: data
    }
}

export const showOverview = (data) => {
    return {
        type: SHOW_OVERVIEW,
        payload: data
    }
}

export const showTaskSelectorChange = (data) => {
    return {
        type: SHOW_TASK_SELECTOR_CHANGE,
        payload: data
    }
}

export const coverSheetChange = (data) => {
    return {
        type: COVER_SHEET_CHANGE,
        payload: data
    }
}