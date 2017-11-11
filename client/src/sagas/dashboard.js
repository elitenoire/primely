import { takeLatest, all} from 'redux-saga/effects'

import { GET_STUDENTS, GET_STUDENT_SINGLE, STUDENT_FORM,
    DELETE_STUDENT_MODAL, } from '../constants'

//import invalidRouteSaga from './invalid404'
import studentDeleteSaga from './studentDelete'
import studentSingleSaga from './studentView'
import studentFormSaga from './studentForm'
import studentSaga from './studentAll'


export default function* manageDashboard(){
    yield all(Object.keys(actionSagaMap).map( pattern => {
        return takeLatest(pattern, actionSagaMap[pattern])
    }))
}


const actionSagaMap = {
    [GET_STUDENTS] : studentSaga,
    [GET_STUDENT_SINGLE] : studentSingleSaga, 
    [STUDENT_FORM] : studentFormSaga,
    [DELETE_STUDENT_MODAL] : studentDeleteSaga
}
