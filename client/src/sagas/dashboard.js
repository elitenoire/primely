import { takeLatest, take, put, fork, call, select, cancel} from 'redux-saga/effects'
import { LOGIN_PATH, DASHBOARD_PATH, DASHBOARD_STUDENTS_PATH,
    DASHBOARD_STUDENTS_NEW_PATH } from '../routes/routes'
import { LOCATION_CHANGE } from 'react-router-redux'
import { SELECT_LOGOUT, LOGOUT_ADMIN_PASS, GET_STUDENTS,
    GET_STUDENTS_PASS, GET_STUDENTS_FAIL } from '../constants'

import { api, auth, studentsParser } from '../utils'
import invalidRouteSaga from './invalid404'
import deleteStudentSaga from './studentDelete'
import studentViewSaga from './studentView'
import saveStudentSaga from './studentSave'

// Single saga to fetch students (data) in main dashboard and in Student List view
export function* fetchStudents(){
    console.log('fetching students..')
    const { response, error } = yield call(api.getStudents)
    if(response){
        const students = yield call(studentsParser, response.data.students)
        yield put({type : GET_STUDENTS_PASS, students })
    }
    else
        yield put({type : GET_STUDENTS_FAIL, error})
}

// Root Dshboard Saga to manage setting up watchers on each view/route change
// Keeps redux in sync with react-router

export default function* manageDashboard(pathname){
    //while(true){
    const isAuth = yield select(({ auth }) => auth.isAuth )
    if(!isAuth) return
    yield fork(watchLogoutSaga)
    //Setup listeners whenever user visits dashboard / student lists
    if(pathname === DASHBOARD_PATH || pathname === DASHBOARD_STUDENTS_PATH){
        console.log('to watch get students action')
        yield take(GET_STUDENTS)
        console.log('Watching for get students')
        yield fork(fetchStudents)
        if(pathname === DASHBOARD_STUDENTS_PATH){
            yield fork(deleteStudentSaga) // only listens for delete action
            // yield fork(studentsSaga) // use this if want to add edit & delete button
        }
        return
    }
    //Setup listeners whenever user decides to create a new student's profile
    // or edit -> same saga because both use the same view / form
    if ( pathname === DASHBOARD_STUDENTS_NEW_PATH ||
        pathname.search(/^\/admin\/dashboard\/students\/edit\/[a-zA-Z0-9]+\/?$/gm) !== -1){
            yield fork(saveStudentSaga)
            return
    }
    // Otherwise... regex below matches the regex above hence in an enclosed else block

    if(pathname.search(/^\/admin\/dashboard\/students\/[a-zA-Z0-9]+\/?$/gm) !== -1){
        yield fork(studentViewSaga)
        return
    }
    // Reached an invalid route
    yield fork(invalidRouteSaga)
    return // no need for  logout listener

    //}
}

function* watchLogoutSaga(){
    console.log('will watch logout')
    const task = yield takeLatest(SELECT_LOGOUT, dashboardLogout)
    //yield take(LOCATION_CHANGE)
    //yield cancel(task)
}

function* dashboardLogout({ key }){
    yield call(auth.deauthenticateUser, key)
    yield put({type : LOGOUT_ADMIN_PASS, method : 'replace'})
}



// Can't use route map because of the regex hence a series of if-else
// const mapRoutesToSaga = {
//     [DASHBOARD_STUDENTS_PATH] : studentsSaga,
//     [DASHBOARD_STUDENTS_NEW_PATH] : studentNewSaga
// }
