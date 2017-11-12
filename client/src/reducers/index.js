import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'
import authReducer from './authReducer'
import studentReducer from './studentReducer'
import toastReducer from './toastReducer'

const rootReducer = combineReducers({
    form : formReducer,
    router : routerReducer,
    auth : authReducer,
    students : studentReducer,
    toast : toastReducer
})

export default rootReducer;
