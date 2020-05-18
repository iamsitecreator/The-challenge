import { setLoadingStatus } from './loading'
import { setErrorStatus } from './error'

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(setErrorStatus(false))
    dispatch(setLoadingStatus(true))
    fetch(url)
    .then(response => {
        if (!response.ok) {
          dispatch(setLoadingStatus(false))
          throw Error(response.statusText)
        }
        dispatch(setErrorStatus(false))
        dispatch(setLoadingStatus(false))
        return response
      })
      .catch(err => {
        const errorText = err.toString().replace('TypeError: ', '')
        dispatch(setLoadingStatus(false))
        dispatch(setErrorStatus(true, errorText))
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
  }
}
