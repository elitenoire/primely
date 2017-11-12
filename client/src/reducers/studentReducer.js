import { GET_STUDENTS, GET_STUDENTS_PASS, GET_STUDENT_SINGLE_PASS,
    UPDATE_SUBMIT_STUDENT_PASS,  DELETE_STUDENT_CACHE,
    CREATE_SUBMIT_STUDENT_PASS, TOGGLE_DELETE_MODAL, GET_STUDENT_SINGLE } from '../constants'


const INITIAL_STATE = { isFetching : true, students : {}, deleteModal : false }

export default (state = INITIAL_STATE, action) => {
    const { type, students, student, id, toggle } = action
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
            return { ...state, isFetching : false,
                students : {...state.students, [student._id] : student} }
        case DELETE_STUDENT_CACHE : {
            const copy = {...state.students}
            delete copy[id]
            return { ...state, isFetching : false, students : copy }
        }
        case TOGGLE_DELETE_MODAL :
            return {...state, deleteModal : toggle}
        default :
            return state
    }
}