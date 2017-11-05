import { put, call } from 'redux-saga/effects'
import { GET_STUDENTS_PASS, GET_STUDENTS_FAIL } from '../constants'

import { api, studentsParser } from '../utils'


export default function* fetchStudents(){
    console.log('fetching students..')
    const { response, error } = yield call(api.getStudents)
    if(response){
        const students = yield call(studentsParser, response.data.students)
        yield put({type : GET_STUDENTS_PASS, students })
        
    }
    else
        yield put({type : GET_STUDENTS_FAIL, error})
}
