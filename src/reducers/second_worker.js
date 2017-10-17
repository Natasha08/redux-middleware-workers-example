export default function(state={}, action) {
  if (action.type === 'WORKER_2_COMPLETE') {
    return {...state, ...action, loading: false, message: 'Worker two is complete!'};
  }
  if (action.type === 'SECOND_WORKER_LOADING') {
    return {...state, ...action, loading: true, message: 'Worker two is processing...'};
  }
  return state;
}
