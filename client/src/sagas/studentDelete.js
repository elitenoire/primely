import { takeLatest, call, put, fork, race, take } from 'redux-saga/effects'
import { DELETE_STUDENT, DELETE_STUDENT_FAIL, CANCEL_DELETE_MODAL,
    DELETE_STUDENT_CACHE, DELETE_STUDENT_PASS, DELETE_STUDENT_MODAL } from '../constants'
import { showModal } from '../actions'
import { api } from '../utils'

function* deleteSingleStudent(id){
    const { error } = yield call(api.deleteStudent, id) //delete from backend api
    if(error){
        yield put({type : DELETE_STUDENT_FAIL, error})
    }
    else {
        yield put({type : DELETE_STUDENT_PASS , method : 'replace'})
        yield put({type : DELETE_STUDENT_CACHE, id }) //delete from local cache
    }
}

function* deleteStudentCheck(){
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
        yield fork(deleteSingleStudent, deleteOk.id)
    }
    //close modal 
    yield put(showModal(false))
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchDeleteStudent(){
    // takeEvery  - listen for every delete request which might cause error if previous
    // request already succeeded
    // takeLatest - cancel previous listener since user can delete in two places
    yield takeLatest(DELETE_STUDENT_MODAL, deleteStudentCheck)
}

// Consider this code to handle multiple delete request from a list, maybe
//
// export default function* watchDeleteStudent() {
//     // 1- Create a channel for request actions
//     const requestChan = yield actionChannel(DELETE_STUDENT)
//     while (true) {
//       // 2- take from the channel
//       const { id } = yield take(requestChan)
//       // 3- Note that we're using a blocking call
//       yield call(deleteSingleStudent, id)
//     }
//   }

