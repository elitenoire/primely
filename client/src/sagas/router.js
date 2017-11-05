import { takeEvery, put, all} from 'redux-saga/effects'
import { routerActions } from 'react-router-redux'

import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH, DASHBOARD_STUDENT_ONE_PATH,
    DASHBOARD_STUDENT_EDIT_PATH, DASHBOARD_STUDENTS_PATH } from '../routes/routes'

import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, LOGIN_ADMIN_PASS, LOGOUT_ADMIN_PASS,
    GOTO_ADMIN_DASHBOARD, REDIRECT_DASHBOARD, REDIRECT_HOME, EDIT_STUDENT ,
    DELETE_STUDENT_PASS, CREATE_SUBMIT_STUDENT_PASS, UPDATE_SUBMIT_STUDENT_PASS} from '../constants'




export default function* routeChanger(){
    yield all(Object.keys(actionRouteMap).map( pattern => {
        return takeEvery(pattern, changeRoute, actionRouteMap[pattern])
    }))
}

function* changeRoute(path, { type, method, id }){
    //const action = type === 'ADMIN_LOGOUT|LOGIN_SUCCESS' ? 'replace' : 'push'
    console.log('Switching routes from saga ..')
    const action =  method || 'push'
    yield put(routerActions[action](`${path}${id || ''}`))
}

const actionRouteMap = {
    [OPEN_LOGIN_MODAL] : LOGIN_PATH,
    [CLOSE_LOGIN_MODAL] : HOME_PATH,
    [LOGIN_ADMIN_PASS] : DASHBOARD_PATH,
    [LOGOUT_ADMIN_PASS] : HOME_PATH,
    [REDIRECT_HOME] : HOME_PATH,
    [GOTO_ADMIN_DASHBOARD] : DASHBOARD_PATH,
    [REDIRECT_DASHBOARD] : DASHBOARD_PATH,
    [DELETE_STUDENT_PASS] : DASHBOARD_STUDENTS_PATH,
    [EDIT_STUDENT] : DASHBOARD_STUDENT_EDIT_PATH,
    [CREATE_SUBMIT_STUDENT_PASS] : DASHBOARD_PATH, // might change
    [UPDATE_SUBMIT_STUDENT_PASS] : DASHBOARD_STUDENT_ONE_PATH // might change
}

