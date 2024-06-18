import { ACCOUT_INFORMATION, FILTER_INFORMATION_CHANGE, LIST_TASK_NAGIVATE_CHANGE, LOGIN_INFORMATION_CHANGE, REGISTER_INFORMATION_CHANGE, SHOW_OVERVIEW, TODO_INFORMATION_CHANGE } from "./actionTypes"

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