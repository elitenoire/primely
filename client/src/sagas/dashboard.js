import { take, put, fork, call, select} from 'redux-saga/effects'
import { SELECT_LOGOUT, LOGOUT_ADMIN_PASS, GET_STUDENTS,
    GET_STUDENTS_PASS, GET_STUDENTS_FAIL } from '../constants'
import { api, auth, studentsParser } from '../utils'


function* fetchStudents(){
    const { response, error } = yield call(api.getStudents)
    if(response){
        const students = yield call(studentsParser, response.data.students)
        yield put({type : GET_STUDENTS_PASS, students })
    }
    else
        yield put({type : GET_STUDENTS_FAIL, error})
}

export default function* manageDashboard(){
    while(true){
    const isAuth = yield select(({ auth }) => auth.isAuth )
    if(!isAuth) return
    console.log('Watch get students action')
    yield take(GET_STUDENTS)
    console.log('Watching for get students')
    yield fork(fetchStudents)
    const logout = yield take(SELECT_LOGOUT)
    yield call(auth.deauthenticateUser, logout.key)
    yield put({type : LOGOUT_ADMIN_PASS, method : 'replace'})
    }
}
