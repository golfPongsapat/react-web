import { combineReducers } from 'redux';
import ProfileReducer from './searchReducers'

const rootReducer = combineReducers({
   profiles: ProfileReducer
})

export default rootReducer;