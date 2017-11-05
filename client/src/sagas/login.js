import { startSubmit, stopSubmit } from 'redux-form'
import { take, put, race, call, select } from 'redux-saga/effects'
import { CANCEL_LOGIN, SUBMIT_LOGIN, ACCESS_TOKEN,
        LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS } from '../constants'
import { toggleModal } from '../actions'
import { auth } from '../utils'


export default function* manageLogin(){
    //doesn't cancel api call - need FIXING
    let isAuth = yield select(({ auth }) => auth.isAuth )
    let errors = null

    while(!isAuth){ // don't need login if already authenticated
        console.log('Waiting for login..')
        const { cancel, submit } = yield race({
            cancel : take(CANCEL_LOGIN),
            submit : take(SUBMIT_LOGIN)
        })
        if(cancel){
            isAuth = true
            yield put(toggleModal('CLOSE'))
            return
        }
        else {
            const { data, formName } = submit
            yield put(startSubmit(formName))
            const { response, error } = yield call(auth.login, data)
            if(response){
                console.log('axios res data ', response.data)
                isAuth = true
                const { token } = response.data
                yield call(auth.authenticateUser, ACCESS_TOKEN, token)
                yield put(stopSubmit(formName, errors))
                yield put({ type : LOGIN_ADMIN_PASS, admin : response.data, method : 'replace'})
                return
            }
            else {
                console.log('catch block err ', error)
                errors = error
                yield put({ type : LOGIN_ADMIN_FAIL, logInError : error })
                yield put(stopSubmit(formName, errors))
            }
            
        }
    }
}

