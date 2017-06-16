import { combineReducers } from 'redux'
import FormReducer from './reducer/FormReducer'

const rootReducer = combineReducers({
    FormReducer: FormReducer
})

export default rootReducer