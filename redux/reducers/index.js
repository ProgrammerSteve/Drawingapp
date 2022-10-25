import { combineReducers } from 'redux'
import brushReducer from './brushReducer'

export default combineReducers({
  brush:brushReducer,
})