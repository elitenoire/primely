import { GET_STUDENTS, GET_STUDENTS_PASS, GET_STUDENTS_FAIL, GET_STUDENT_SINGLE_PASS,
    GET_STUDENT_SINGLE_FAIL, UPDATE_SUBMIT_STUDENT_PASS, DELETE_STUDENT_FAIL,
    DELETE_STUDENT_CACHE, CREATE_SUBMIT_STUDENT_PASS, TOGGLE_DELETE_MODAL,
    CREATE_SUBMIT_STUDENT_FAIL, UPDATE_SUBMIT_STUDENT_FAIL, GET_STUDENT_SINGLE } from '../constants'


const INITIAL_STATE = { isFetching : true, students : {}, notif : '', error : '', deleteModal : false }

export default (state = INITIAL_STATE, action) => {
    const { type, error, students, student, id, mode , toggle, msg } = action
    switch(type){
        case GET_STUDENTS:
        case GET_STUDENT_SINGLE:
            return {...state, isFetching : true}
        case GET_STUDENTS_PASS :
            return {...state, isFetching : false, students }
        // Local cache
        case GET_STUDENT_SINGLE_PASS :
        case CREATE_SUBMIT_STUDENT_PASS :
        case UPDATE_SUBMIT_STUDENT_PASS :
            return { ...state, isFetching : false, notif : msg, error : '',
                students : {...state.students, [student._id] : student} }
        case DELETE_STUDENT_CACHE : {
            const copy = {...state.students}
            delete copy[id]
            return { ...state, isFetching : false, students : copy }
        }
        //add fail state for create, update
        case CREATE_SUBMIT_STUDENT_FAIL :
        case UPDATE_SUBMIT_STUDENT_FAIL :
            return { ...state, notif : `Error : Can not ${mode.toLowerCase()} student profile`, error}
        case GET_STUDENTS_FAIL :
        case GET_STUDENT_SINGLE_FAIL :
        case DELETE_STUDENT_FAIL :
            return {...state, isFetching : false, error}
        case TOGGLE_DELETE_MODAL :
            return {...state, deleteModal : toggle}
        default :
            return state
    }
}