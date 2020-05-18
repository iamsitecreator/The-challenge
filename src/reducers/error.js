export function getErrorStatus(state = false, action) {
  switch (action.type) {
    case 'IS_ERROR':
      return action.payload
    default:
      return state
  }
}
