import { startSubmit, stopSubmit } from 'redux-form'
import { take, select, race, call, put} from 'redux-saga/effects'
import { CANCEL_STUDENT } from '../constants'
import { api } from '../utils'


export default function* studentSaver({type, student, formName, id, mode}){
    const isAuth = yield select(({ auth }) => auth.isAuth )
    if(!isAuth) return //Need to update user with msg of authentication / redirect to login
    //Notify redux form of submitting to change states
    yield put(startSubmit(formName))
    const method = mode === 'CREATE' ? 'post' : 'put'
    let errors = {}
    //const submit = yield call(api.saveStudent, student, method, id)
    const { submit, cancel } = yield race({
        submit : call(api().saveStudent, student, method, id),
        cancel : take(CANCEL_STUDENT)
    })
    if(cancel){
        const { mode, id } = cancel
        yield put({type : `CANCEL_${mode}_STUDENT` , id})
        return
    }

    const { response, error } = submit
    if(response){
        const { student, msg } = response.data
        yield put({type : `${mode}_${type}_PASS`, student, msg , id})
    }
    else{
        errors = error
        yield put({type : `${mode}_${type}_FAIL`, error, mode})
        //Should show errors to the user - maybe a notif
    }
    yield put(stopSubmit(formName, errors))
}

//WATCHER SAGA - listen for dispatched action, call worker to handle action

// export default function* manageStudentSave(){
//     const task = yield takeLatest(SUBMIT_STUDENT, studentSaver)
// }