import { take, call, put} from 'redux-saga/effects'
import { GET_STUDENT_SINGLE, GET_STUDENT_SINGLE_PASS, GET_STUDENT_SINGLE_FAIL } from '../constants'
import { api } from '../utils'
import invalidRouteSaga from './invalid404'


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* manageStudentView(){
    const { id } = yield take(GET_STUDENT_SINGLE)
    const { response, error } = yield call(api.getSingleStudent, id)
    if(response){
        // Need to replace, as api sends an obj { student , msg }
        const { student, msg } = response.data
        yield put({ type : GET_STUDENT_SINGLE_PASS, student , msg })
    }
    else{
        // console.error( error)
        yield put({type : GET_STUDENT_SINGLE_FAIL, error})
        //CALL INVALID ROUTE HANDLER
    }
}