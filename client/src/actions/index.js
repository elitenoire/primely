import { CANCEL_LOGIN , SUBMIT_LOGIN, GET_STUDENTS, SUBMIT_STUDENT,
    CANCEL_DELETE_MODAL, TOGGLE_DELETE_MODAL, DELETE_STUDENT_MODAL } from '../constants'

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

export const submitStudent = (formName, student, mode, id = '') => {
    return {
        type : SUBMIT_STUDENT,
        formName,
        student,
        mode,
        id
    }
}

export const showModal = toggle => {
    return {
        type : TOGGLE_DELETE_MODAL,
        toggle,
    }
}

export const cancelModal = () => {
    return {
        type : CANCEL_DELETE_MODAL
    }
}

export const openModal = () => {
    return {
        type : DELETE_STUDENT_MODAL
    }
}
