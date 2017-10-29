import { startSubmit, stopSubmit } from 'redux-form'
import { takeEvery, take, put, race, call, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { CANCEL_LOGIN, SUBMIT_LOGIN, ACCESS_TOKEN,
        LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS } from '../constants'
import { toggleModal } from '../actions'
import { LOGIN_PATH } from '../routes/routes'
import { auth } from '../utils'

export default function* manageLogin(){
    //doesn't cancel api call - need FIXING
    let needLogin = yield select(({ auth }) => auth.isAuth )
    let errors = null

    while(!needLogin){ // don't need login if already authenticated
        const { cancel, submit } = yield race({
            cancel : take(CANCEL_LOGIN),
            submit : take(SUBMIT_LOGIN)
        })
        if(cancel){
            needLogin = false
            yield put(toggleModal('CLOSE'))
        }
        else {
            yield put(startSubmit(formName))
            const { data, formName } = submit
            const { response, error } = yield call(auth.login, data)
            if(response){
                console.log('axios res data ', response.data)
                needLogin = false
                const { token } = response.data
                yield call(auth.authenticateUser, ACCESS_TOKEN, token)
                yield put({ type : LOGIN_ADMIN_PASS, admin : response.data, method : 'replace'})
            }
            else {
                console.log('catch block err ', error)
                errors = error
                yield put({ type : LOGIN_ADMIN_FAIL, logInError : error })
            }
            yield put(stopSubmit(formName, errors))
        }
    }
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
// export default function* watchLoginModal(){
//     yield takeEvery(LOCATION_CHANGE, manageLogin)
// }
