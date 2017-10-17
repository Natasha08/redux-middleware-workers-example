export default function(state={}, action) {
  if (action.type === 'WORKER_2_COMPLETE') {
    return {...state, ...action, loading: false};
  }
  if (action.type === 'SECOND_WORKER_LOADING') {
    return {...state, ...action, loading: true};
  }
  return state;
}
