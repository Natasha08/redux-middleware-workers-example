export default function(state={}, action) {
  if (action.type === 'WORKER_1_COMPLETE') {
    return {...state, ...action, loading: false, message: 'Worker one is complete!'};
  }
  if (action.type === 'FIRST_WORKER_LOADING') {
    return {...state, ...action, loading: true, message: 'Worker one is processing...'};
  }
  return state;
}
