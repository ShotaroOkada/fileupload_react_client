import { combineReducers } from 'redux'
import FileState from './FileState'

const rootReducer = combineReducers({
    files: FileState
});

export default rootReducer;