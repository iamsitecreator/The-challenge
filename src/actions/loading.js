export function setLoadingStatus(loading = false) {
  return {
    type: 'IS_LOADING',
    loading
  }
}