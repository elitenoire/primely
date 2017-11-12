import { call, put, fork, race, take } from 'redux-saga/effects'
import { DELETE_STUDENT, DELETE_STUDENT_FAIL, CANCEL_DELETE_MODAL,
    DELETE_STUDENT_CACHE, DELETE_STUDENT_PASS } from '../constants'
import { showModal } from '../actions'
import { api } from '../utils'

function* deleteSingleStudent(id){
    const { error } = yield call(api().deleteStudent, id) //delete from backend api
    if(error){
        yield put({type : DELETE_STUDENT_FAIL, error})
    }
    else {
        yield put({type : DELETE_STUDENT_PASS , method : 'replace'})
        yield put({type : DELETE_STUDENT_CACHE, id }) //delete from local cache
    }
}

export default function* deleteStudentCheck({ id }){
    yield put(showModal(true))
    //wait for UI to cancel or approve delete from modal
    const { deleteOk } = yield race(
        {
            deleteOk: take(DELETE_STUDENT),
            cancel: take(CANCEL_DELETE_MODAL),
        }
    )
    //Make delete request to api
    if(deleteOk){
        yield fork(deleteSingleStudent, deleteOk.id || id)
    }
    //close modal
    yield put(showModal(false))
}
