import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'
import authReducer from './authReducer'
import studentReducer from './studentReducer'

const rootReducer = combineReducers({
    form : formReducer,
    router : routerReducer,
    auth : authReducer,
    students : studentReducer
})

export default rootReducer;
