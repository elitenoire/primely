import { startSubmit, stopSubmit } from 'redux-form'
import { take, put, race, call, select } from 'redux-saga/effects'
import { CANCEL_LOGIN, SUBMIT_LOGIN, ACCESS_TOKEN,
        LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS } from '../constants'
import { toggleModal } from '../actions'
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
            return
        }
        else {
            const { data, formName } = submit
            yield put(startSubmit(formName))
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

