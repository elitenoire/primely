import { call, put} from 'redux-saga/effects'
import { GET_STUDENT_SINGLE_PASS, GET_STUDENT_SINGLE_FAIL } from '../constants'
import { api } from '../utils'
//import invalidRouteSaga from './invalid404'


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* manageStudentView({ id }){
    const { response, error } = yield call(api.getOneStudent, id)
    if(response){
        const { student, msg } = response.data
        yield put({ type : GET_STUDENT_SINGLE_PASS, student , msg })
    }
    else{
        yield put({type : GET_STUDENT_SINGLE_FAIL, error})
        //CALL INVALID ROUTE HANDLER
    }
}