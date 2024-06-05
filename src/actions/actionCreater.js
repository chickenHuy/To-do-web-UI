import { ACCOUT_INFORMATION, LOGIN_INFORMATION_CHANGE, REGISTER_INFORMATION_CHANGE } from "./actionTypes"

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