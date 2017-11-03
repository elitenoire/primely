import { GET_STUDENTS_PASS, GET_STUDENTS_FAIL } from '../constants'

    // import { GET_STUDENTS_PASS, GET_STUDENTS_FAIL, DELETE_STUDENT_CACHE, DELETE_STUDENT_FAIL,
    //     GET_STUDENT_SINGLE_PASS, GET_STUDENT_SINGLE_FAIL, UPDATE_STUDENT_PASS,
    //     TOGGLE_DELETE_MODAL, SELECT_STUDENT } from '../constants'
    

const INITIAL_STATE = { isFetching : true, students : {}, notif : '', error : '', deleteModal : false }

export default (state = INITIAL_STATE, { type, error, students, student, id, toggle, color }) => {
    switch(type){
        case GET_STUDENTS_PASS :
            return {...state, isFetching : false, students }
        // case GET_STUDENT_SINGLE_PASS :
        // case UPDATE_STUDENT_PASS :
        //     return { ...state, isFetching : false, students : {...state.students, [student.id] : student} }
        // case DELETE_STUDENT_CACHE : {
        //     const copy = {...state.students}
        //     delete copy[id]
        //     return { ...state, isFetching : false, students : copy }
        // }
        // case SELECT_STUDENT :
        //     return { ...state, color}
        // //add fail state for create, update
         case GET_STUDENTS_FAIL :
        // case GET_STUDENT_SINGLE_FAIL :
        // case DELETE_STUDENT_FAIL :
             return {...state, isFetching : false, error}
        // case TOGGLE_DELETE_MODAL :
        //     return {...state, deleteModal : toggle}
        default :
            return state
    }
}