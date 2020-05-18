export function getLoadingStatus(state = false, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return action.loading
    default:
      return state
  }
}
