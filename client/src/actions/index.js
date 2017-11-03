import { CANCEL_LOGIN , SUBMIT_LOGIN, GET_STUDENTS } from '../constants'

export const toggleModal = (type) => {
    return {
        type : `${type}_LOGIN_MODAL`
    }
}

export const cancelLogin = () => {
    return {
        type : CANCEL_LOGIN
    }
}

export const submitLoginData = (data, formName) => {
    return {
        type : SUBMIT_LOGIN,
        data,
        formName
    }
}

export const selectMenuAction = (action, key = '') => {
    return {
        type : `SELECT_${action}`,
        key
    }
}

export const getStudents = () => {
    return {
        type : GET_STUDENTS
    }
}