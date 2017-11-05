import { call, put} from 'redux-saga/effects'
import { GET_STUDENT_SINGLE_PASS, GET_STUDENT_SINGLE_FAIL } from '../constants'
import { api } from '../utils'
import invalidRouteSaga from './invalid404'


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* manageStudentView({ id }){
    console.log('Fetching single student...')
    //const { id } = yield take(GET_STUDENT_SINGLE)
    console.log('Id is ', id)
    const { response, error } = yield call(api.getOneStudent, id)
    if(response){
        const { student, msg } = response.data
        yield put({ type : GET_STUDENT_SINGLE_PASS, student , msg })
    }
    else{
        // console.error( error)
        yield put({type : GET_STUDENT_SINGLE_FAIL, error})
        //CALL INVALID ROUTE HANDLER
    }
}