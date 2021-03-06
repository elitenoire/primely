import { CANCEL_LOGIN , SUBMIT_LOGIN, GET_STUDENTS, SUBMIT_STUDENT,
    GET_STUDENT_SINGLE, EDIT_STUDENT, DELETE_STUDENT, CANCEL_STUDENT,
    CANCEL_DELETE_MODAL, TOGGLE_DELETE_MODAL, DELETE_STUDENT_MODAL,
    STUDENT_FORM, DISMISS_TOAST } from '../constants'

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
export const watchForm = () => {
    return {
        type : STUDENT_FORM
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

export const getSingleStudent = (id) => {
    return {
        type : GET_STUDENT_SINGLE,
        id
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

export const cancelStudent = (formName, mode, id= '') => {
    return {
        type : CANCEL_STUDENT,
        formName,
        mode,
        id
    }
}

export const editStudent = (id) => {
    return {
        type : EDIT_STUDENT,
        id
    }
}

export const deleteStudent = (id) => {
    return {
        type : DELETE_STUDENT,
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

export const openModal = (id) => {
    return {
        type : DELETE_STUDENT_MODAL,
        id
    }
}

export const dismissToast = () => {
    return {
        type : DISMISS_TOAST
    }
}
