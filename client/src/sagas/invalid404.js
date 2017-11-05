import { put, select } from 'redux-saga/effects'
import { REDIRECT_DASHBOARD, REDIRECT_HOME } from '../constants'

export default function* manageInvalid404Routes(){
    console.log('Invalid route')
    const isAuth = yield select(({ auth }) => auth.isAuth )
    // should redirect to home if in home??
    yield put({type : isAuth ? REDIRECT_DASHBOARD : REDIRECT_HOME, method : 'replace' })
    /**
     * Redirection
     * students/:id id is not defined, redirect to dashbaord/student list?
     * OR
     * if isAuth redirect to dashboard
     * if !isAuth redirect to Home
     */
}