import { combineReducers } from 'redux'
import { items } from './items'
import { getLoadingStatus } from './loading'
import { getErrorStatus } from './error'

export default combineReducers({
  items,
  loading: getLoadingStatus,
  error: getErrorStatus
})
