import { startSubmit, stopSubmit } from 'redux-form'
import { takeEvery, take, put, race, call} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { CANCEL_LOGIN, SUBMIT_LOGIN,
        LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS } from '../constants'
import { toggleModal } from '../actions'
import { LOGIN_PATH } from '../routes/routes'
import { auth } from '../utils'

export default function* manageLogin(/*{ payload : { pathname } }*/){
    //doesn't cancel api call - need FIXING
    //console.log(pathname)
    console.log(LOGIN_PATH)

    //if(pathname === LOGIN_PATH ){
        let loginDone = false
        let errors = null
        while(!loginDone){
            const { cancel, submit } = yield race({
                cancel : take(CANCEL_LOGIN),
                submit : take(SUBMIT_LOGIN)
            })
            if(cancel){
                loginDone = true
                yield put(toggleModal('CLOSE'))
            }
            else {
                yield put(startSubmit(formName))
                const { data, formName } = submit
                const { response, error } = yield call(auth.login, data)
                if(response){
                    console.log('axios res data ', response.data)
                    loginDone = true
                    const { token } = response.data
                    yield call(auth.authenticateUser, 'accessToken', token)
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
    //}
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
// export default function* watchLoginModal(){
//     yield takeEvery(LOCATION_CHANGE, manageLogin)
// }
