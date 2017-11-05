import { fork, take, put, race} from 'redux-saga/effects'
import { SUBMIT_STUDENT, CANCEL_STUDENT } from '../constants'
import studentSaver from './studentSave'
//import { saveStudent } from '../actions'

//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* manageStudentForm(){
    console.log('watching form')
    const { cancel, submit } = yield race({
        cancel : take(CANCEL_STUDENT),
        submit : take(SUBMIT_STUDENT)
    })
    if(cancel){
        const { mode, id } = cancel
        yield put({type : `CANCEL_${mode}_STUDENT` , id})
        return //not necessary cuz of else statement
    }
    else {
        //const { formName, student, mode, id } = submit
        //yield put(saveStudent(formName, student, mode, id))
        console.log('Submitting action...', submit)
        yield fork(studentSaver, submit)
    }
}

