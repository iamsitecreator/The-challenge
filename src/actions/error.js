export function setErrorStatus(errorStatus = false, errorText = '') {
  return {
    type: 'IS_ERROR',
    payload: { errorStatus, errorText }
  }
}
