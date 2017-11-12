import { LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS, DELETE_STUDENT_FAIL,
    CREATE_SUBMIT_STUDENT_FAIL, UPDATE_SUBMIT_STUDENT_FAIL,
    GET_STUDENTS_FAIL, GET_STUDENT_SINGLE_FAIL, DISMISS_TOAST,
    /*GET_STUDENT_SINGLE_PASS,*/ DELETE_STUDENT_PASS,
    CREATE_SUBMIT_STUDENT_PASS, UPDATE_SUBMIT_STUDENT_PASS } from '../constants'

const INITIAL_STATE = { error : null, success : null }

export default (state = INITIAL_STATE, action) => {
    const { type, msg , error, mode, admin } = action
    switch(type){
        case LOGIN_ADMIN_PASS :
            return { error : null, success : `${admin.message} ${admin.username}`}
        case LOGIN_ADMIN_FAIL :
            return { success : null, error : 'Unable to login' }
        case CREATE_SUBMIT_STUDENT_FAIL :
        case UPDATE_SUBMIT_STUDENT_FAIL :
        case DELETE_STUDENT_FAIL :
            return { success : null, error : `Unable to ${mode.toLowerCase()} student profile`}
        case GET_STUDENTS_FAIL :
        case GET_STUDENT_SINGLE_FAIL :
            return { success : null, error}
        //case GET_STUDENT_SINGLE_PASS :
        case CREATE_SUBMIT_STUDENT_PASS :
        case UPDATE_SUBMIT_STUDENT_PASS :
        case DELETE_STUDENT_PASS :
            return { error : null, success : msg }
        case DISMISS_TOAST :
            return INITIAL_STATE
        default :
            return state
    }
}